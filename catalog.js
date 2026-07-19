(function initCatalogUtils(globalObject, factory) {
  const api = factory();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalObject) {
    globalObject.CatalogUtils = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function createCatalogUtils() {
  const RANK_FIELDS = {
    family: "family",
    subfamily: "subfamily",
    tribe: "tribe",
    genus: "genus",
    subgenus: "subgenus"
  };

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFKC")
      .toLocaleLowerCase("zh-CN")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getIucnCode(status) {
    const match = String(status || "").match(/^(EX|EW|CR|EN|VU|NT|LC|DD|NE)/);
    return match ? match[1] : "";
  }

  function flattenCatalog(root) {
    const species = [];

    function visit(node, ancestors) {
      const lineage = ancestors.concat(node);

      if (node.rank === "species") {
        const ranks = {};
        lineage.forEach((taxon) => {
          if (RANK_FIELDS[taxon.rank]) {
            ranks[RANK_FIELDS[taxon.rank]] = {
              scientificName: taxon.scientificName,
              chineseName: taxon.chineseName || ""
            };
          }
        });

        const index = species.length + 1;
        const scientificGenus = String(node.scientificName || "").split(" ")[0];
        const record = {
          ...node,
          index,
          code: `WR-${String(index).padStart(3, "0")}`,
          imagePath: `images/${node.scientificName}.jpg`,
          lineage: lineage
            .filter((taxon) => taxon.rank !== "order" && taxon.rank !== "species")
            .map((taxon) => ({
              rank: taxon.rank,
              scientificName: taxon.scientificName,
              chineseName: taxon.chineseName || ""
            })),
          family: ranks.family?.scientificName || "",
          familyChinese: ranks.family?.chineseName || "",
          subfamily: ranks.subfamily?.scientificName || "",
          tribe: ranks.tribe?.scientificName || "",
          genus: ranks.genus?.scientificName || scientificGenus,
          genusChinese: ranks.genus?.chineseName || "",
          subgenus: ranks.subgenus?.scientificName || "",
          iucnCode: getIucnCode(node.iucnStatus)
        };

        record.searchText = normalizeText([
          record.code,
          record.chineseName,
          record.scientificName,
          record.author,
          record.family,
          record.familyChinese,
          record.genus,
          record.genusChinese,
          record.distribution,
          record.description,
          record.remarks,
          record.taxonomyNote,
          ...(record.alternativeChineseNames || [])
        ].join(" | "));

        species.push(record);
      }

      (node.children || []).forEach((child) => visit(child, lineage));
    }

    visit(root, []);
    return species;
  }

  function getProtectionTokens(species) {
    const tokens = [];
    const level = species.protectionLevel || {};

    if (level.cites) tokens.push(`cites-${level.cites}`);
    if (level.chinaLevel) tokens.push(`china-${level.chinaLevel}`);

    return tokens;
  }

  function riskScore(species) {
    const level = species.protectionLevel || {};
    const iucnWeights = { CR: 60, EN: 48, VU: 36, NT: 18, LC: 4 };
    let score = iucnWeights[species.iucnCode] || 0;

    if (level.cites === "I") score += 100;
    if (level.cites === "II") score += 20;
    if (level.chinaLevel === "I") score += 90;
    if (level.chinaLevel === "II") score += 35;
    if (species.taxonomyNote) score += 2;

    return score;
  }

  function matchesFilters(species, filters) {
    const query = normalizeText(filters.query);
    if (query && !species.searchText.includes(query)) return false;

    if (filters.family && filters.family !== "all" && species.family !== filters.family) {
      return false;
    }

    if (filters.genus && filters.genus !== "all" && species.genus !== filters.genus) {
      return false;
    }

    if (filters.iucn && filters.iucn !== "all") {
      if (filters.iucn === "recorded" && !species.iucnCode) return false;
      if (filters.iucn === "unrecorded" && species.iucnCode) return false;
      if (!["recorded", "unrecorded"].includes(filters.iucn) && species.iucnCode !== filters.iucn) {
        return false;
      }
    }

    const activeProtection = Array.from(filters.protection || []);
    if (activeProtection.length) {
      const speciesTokens = new Set(getProtectionTokens(species));
      if (!activeProtection.some((token) => speciesTokens.has(token))) return false;
    }

    if (filters.taxonomyNote && !species.taxonomyNote) return false;

    return true;
  }

  function sortSpecies(species, sortKey) {
    const items = species.slice();

    if (sortKey === "chinese") {
      return items.sort((a, b) => a.chineseName.localeCompare(b.chineseName, "zh-CN"));
    }

    if (sortKey === "scientific") {
      return items.sort((a, b) => a.scientificName.localeCompare(b.scientificName, "en"));
    }

    if (sortKey === "priority") {
      return items.sort((a, b) => riskScore(b) - riskScore(a) || a.index - b.index);
    }

    return items.sort((a, b) => a.index - b.index);
  }

  function filterCatalog(species, filters) {
    return sortSpecies(
      species.filter((entry) => matchesFilters(entry, filters)),
      filters.sort || "taxonomy"
    );
  }

  function groupSpecies(species, sortKey) {
    if (sortKey !== "taxonomy") {
      return [{ key: sortKey || "all", label: "筛选结果", items: species }];
    }

    const groups = [];
    const byGenus = new Map();

    species.forEach((entry) => {
      if (!byGenus.has(entry.genus)) {
        const group = {
          key: entry.genus,
          label: entry.genus,
          chineseName: entry.genusChinese,
          items: []
        };
        byGenus.set(entry.genus, group);
        groups.push(group);
      }
      byGenus.get(entry.genus).items.push(entry);
    });

    return groups;
  }

  function summarize(species) {
    return {
      total: species.length,
      citesI: species.filter((entry) => entry.protectionLevel?.cites === "I").length,
      citesII: species.filter((entry) => entry.protectionLevel?.cites === "II").length,
      chinaI: species.filter((entry) => entry.protectionLevel?.chinaLevel === "I").length,
      chinaII: species.filter((entry) => entry.protectionLevel?.chinaLevel === "II").length,
      taxonomyNotes: species.filter((entry) => Boolean(entry.taxonomyNote)).length,
      iucnRecorded: species.filter((entry) => Boolean(entry.iucnCode)).length
    };
  }

  return {
    filterCatalog,
    flattenCatalog,
    getIucnCode,
    getProtectionTokens,
    groupSpecies,
    matchesFilters,
    normalizeText,
    riskScore,
    sortSpecies,
    summarize
  };
});
