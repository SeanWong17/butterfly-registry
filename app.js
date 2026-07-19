(function startWingRegister() {
  "use strict";

  const utils = window.CatalogUtils;
  const i18n = window.WingI18n;
  const data = window.BUTTERFLY_DATA || (typeof BUTTERFLY_DATA !== "undefined" ? BUTTERFLY_DATA : null);

  if (!utils || !i18n || !data) {
    document.body.innerHTML = '<main class="fatal-error"><h1>档案加载失败 / Archive failed to load</h1><p>数据文件或应用工具未能载入。 The catalog data or application utilities could not be loaded.</p></main>';
    return;
  }

  const allSpecies = utils.flattenCatalog(data);
  allSpecies.forEach((entry) => {
    const translation = i18n.SPECIES[entry.scientificName] || {};
    entry.searchText = utils.normalizeText([
      entry.searchText,
      translation.name,
      translation.range,
      translation.profile,
      translation.note,
      translation.taxonomy,
      translation.citesBasis,
      i18n.TAXA[entry.family],
      i18n.TAXA[entry.genus]
    ].join(" | "));
  });
  const totals = utils.summarize(allSpecies);
  const state = {
    language: resolveInitialLanguage(),
    view: "cabinet",
    query: "",
    family: "all",
    genus: "all",
    iucn: "all",
    protection: new Set(),
    taxonomyNote: false,
    sort: "taxonomy",
    selectedId: ""
  };
  let visibleSpecies = allSpecies.slice();
  let detailTrigger = null;

  const elements = {
    appFrame: document.getElementById("app-frame"),
    cabinetView: document.getElementById("cabinet-view"),
    auditView: document.getElementById("audit-view"),
    cabinet: document.getElementById("specimen-cabinet"),
    auditBody: document.getElementById("audit-body"),
    summaryStrip: document.getElementById("summary-strip"),
    resultIndex: document.getElementById("result-index"),
    filterSummary: document.getElementById("filter-summary"),
    search: document.getElementById("catalog-search"),
    family: document.getElementById("family-filter"),
    genus: document.getElementById("genus-filter"),
    iucn: document.getElementById("iucn-filter"),
    sort: document.getElementById("sort-select"),
    filterForm: document.getElementById("filter-form"),
    filterPanel: document.getElementById("filter-panel"),
    filterScrim: document.getElementById("filter-scrim"),
    openFilters: document.getElementById("open-filters"),
    closeFilters: document.getElementById("close-filters"),
    resetFilters: document.getElementById("reset-filters"),
    detailPanel: document.getElementById("detail-panel"),
    detailContent: document.getElementById("detail-content"),
    detailCode: document.getElementById("detail-code"),
    closeDetail: document.getElementById("close-detail"),
    previousSpecies: document.getElementById("previous-species"),
    nextSpecies: document.getElementById("next-species"),
    sourceDialog: document.getElementById("source-dialog"),
    openSources: document.getElementById("open-sources"),
    closeSources: document.getElementById("close-sources"),
    scopeNote: document.getElementById("scope-note"),
    verifiedDate: document.getElementById("verified-date"),
    sourceList: document.getElementById("source-list"),
    metaDescription: document.getElementById("meta-description"),
    languageToggle: document.getElementById("language-toggle"),
    languageLabel: document.getElementById("language-label")
  };

  function resolveInitialLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested === "zh" || requested === "en") return requested;

    try {
      const stored = window.localStorage.getItem("wing-register-language");
      if (stored === "zh" || stored === "en") return stored;
    } catch (_) {
      // Storage can be unavailable in privacy-restricted contexts.
    }

    return "zh";
  }

  function t(key, values) {
    return i18n.translate(state.language, key, values);
  }

  function speciesText(entry) {
    const translated = i18n.SPECIES[entry.scientificName] || {};
    if (state.language === "en") {
      return {
        name: translated.name || entry.chineseName,
        range: translated.range || entry.distribution,
        profile: translated.profile || entry.description,
        note: translated.note || entry.remarks,
        taxonomy: translated.taxonomy || entry.taxonomyNote,
        citesBasis: translated.citesBasis || entry.citesBasis
      };
    }

    return {
      name: entry.chineseName,
      range: entry.distribution,
      profile: entry.description,
      note: entry.remarks,
      taxonomy: entry.taxonomyNote,
      citesBasis: entry.citesBasis
    };
  }

  function taxonCommonName(scientificName, chineseName) {
    if (state.language === "en") return i18n.TAXA[scientificName] || "";
    return chineseName || "";
  }

  function rankLabel(rank) {
    const key = `rank${String(rank || "").charAt(0).toUpperCase()}${String(rank || "").slice(1)}`;
    return t(key);
  }

  function iucnLabel(entry) {
    return entry.iucnCode ? t(`iucn${entry.iucnCode}`) : t("unrecorded");
  }

  function chinaLevelLabel(level) {
    if (level === "I") return t("chinaLevelOne");
    if (level === "II") return t("chinaLevelTwo");
    return t("notListed");
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeExternalUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "#";
    } catch (_) {
      return "#";
    }
  }

  function iconize() {
    if (window.lucide) {
      window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
    }
  }

  function localizeStaticContent() {
    document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
    document.body.dataset.language = state.language;
    document.title = t("documentTitle");
    elements.metaDescription.setAttribute("content", t("metaDescription"));

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((node) => {
      node.setAttribute("title", t(node.dataset.i18nTitle));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });

    elements.languageLabel.textContent = t("language");
    elements.languageToggle.setAttribute("title", t("languageTitle"));
    elements.languageToggle.setAttribute("aria-label", t("languageTitle"));
  }

  function persistLanguage(language) {
    try {
      window.localStorage.setItem("wing-register-language", language);
    } catch (_) {
      // The query parameter still makes the selected language shareable.
    }
  }

  function updateLanguageUrl() {
    const url = new URL(window.location.href);
    if (state.language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url.href);
  }

  function setLanguage(language) {
    state.language = language === "en" ? "en" : "zh";
    persistLanguage(state.language);
    updateLanguageUrl();
    localizeStaticContent();
    populateTaxonomyFilters();
    renderSources();
    renderResults();

    const selected = findSpecies(state.selectedId);
    if (selected) renderDetail(selected);
    iconize();
  }

  function uniqueTaxa(key, chineseKey, source) {
    const values = new Map();
    source.forEach((entry) => {
      if (entry[key] && !values.has(entry[key])) {
        values.set(entry[key], entry[chineseKey] || "");
      }
    });
    return Array.from(values, ([scientificName, chineseName]) => ({ scientificName, chineseName }));
  }

  function appendTaxonOptions(select, taxa, allLabel) {
    select.replaceChildren();
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = allLabel;
    select.append(allOption);

    taxa.forEach((taxon) => {
      const option = document.createElement("option");
      const commonName = taxonCommonName(taxon.scientificName, taxon.chineseName);
      option.value = taxon.scientificName;
      option.textContent = commonName
        ? `${commonName} · ${taxon.scientificName}`
        : taxon.scientificName;
      select.append(option);
    });
  }

  function populateTaxonomyFilters() {
    appendTaxonOptions(elements.family, uniqueTaxa("family", "familyChinese", allSpecies), t("allFamilies"));
    elements.family.value = state.family;
    refreshGenusOptions();
  }

  function refreshGenusOptions() {
    const source = state.family === "all"
      ? allSpecies
      : allSpecies.filter((entry) => entry.family === state.family);
    const genera = uniqueTaxa("genus", "genusChinese", source);
    const validGenera = new Set(genera.map((entry) => entry.scientificName));

    if (state.genus !== "all" && !validGenera.has(state.genus)) {
      state.genus = "all";
    }

    appendTaxonOptions(elements.genus, genera, t("allGenera"));
    elements.genus.value = state.genus;
  }

  function renderFilterCounts() {
    document.getElementById("count-cites-i").textContent = totals.citesI;
    document.getElementById("count-cites-ii").textContent = totals.citesII;
    document.getElementById("count-china-i").textContent = totals.chinaI;
    document.getElementById("count-china-ii").textContent = totals.chinaII;
    document.getElementById("count-taxonomy").textContent = totals.taxonomyNotes;
  }

  function renderSummary() {
    const metrics = [
      { token: "", value: totals.total, label: t("totalEntries"), className: "total" },
      { token: "cites-I", value: totals.citesI, label: "CITES I", className: "cites-i" },
      { token: "cites-II", value: totals.citesII, label: "CITES II", className: "cites-ii" },
      { token: "china-I", value: totals.chinaI, label: t("chinaLevelOne"), className: "china-i" },
      { token: "china-II", value: totals.chinaII, label: t("chinaLevelTwo"), className: "china-ii" }
    ];

    elements.summaryStrip.innerHTML = metrics.map((metric) => {
      const active = metric.token
        ? state.protection.size === 1 && state.protection.has(metric.token) && !state.taxonomyNote
        : state.protection.size === 0 && !state.taxonomyNote;
      return `
        <button class="summary-metric ${escapeHtml(metric.className)}" type="button"
          data-summary-filter="${escapeHtml(metric.token)}" aria-pressed="${active}">
          <strong>${String(metric.value).padStart(2, "0")}</strong>
          <span>${escapeHtml(metric.label)}</span>
        </button>
      `;
    }).join("");
  }

  function protectionBadges(entry, includeIucn) {
    const badges = [];
    const level = entry.protectionLevel || {};

    if (level.cites) {
      badges.push(`<span class="status-badge cites-${level.cites.toLowerCase()}">CITES ${escapeHtml(level.cites)}</span>`);
    }
    if (level.chinaLevel) {
      const label = level.chinaLevel === "I" ? t("chinaLevelOne") : t("chinaLevelTwo");
      badges.push(`<span class="status-badge china-${level.chinaLevel.toLowerCase()}">${escapeHtml(label)}</span>`);
    }
    if (includeIucn && entry.iucnCode) {
      badges.push(`<span class="status-badge iucn">IUCN ${escapeHtml(entry.iucnCode)}</span>`);
    }

    return badges.join("");
  }

  function specimenCard(entry, imageIndex) {
    const selected = state.selectedId === entry.id;
    const loading = imageIndex < 8 ? "eager" : "lazy";
    const localized = speciesText(entry);

    return `
      <article class="specimen-drawer${selected ? " is-selected" : ""}" data-open="${escapeHtml(entry.id)}"
        tabindex="0" role="button" aria-label="${escapeHtml(t("openRecord", { name: localized.name }))}" aria-current="${selected ? "true" : "false"}">
        <div class="drawer-number">
          <span>${escapeHtml(entry.code)}</span>
          <span>${escapeHtml(entry.family)}</span>
        </div>
        <div class="specimen-stage">
          <img src="${escapeHtml(thumbnailPath(entry.imagePath))}" alt="${escapeHtml(t("specimenAlt", { name: localized.name }))}"
            loading="${loading}" decoding="async" width="512" height="320">
          <div class="protection-tabs">${protectionBadges(entry, true)}</div>
        </div>
        <div class="drawer-caption">
          <h3>${escapeHtml(localized.name)}</h3>
          <p class="scientific-name">${escapeHtml(entry.scientificName)}</p>
          <p class="drawer-range" title="${escapeHtml(localized.range)}">${escapeHtml(localized.range)}</p>
        </div>
        ${entry.taxonomyNote ? `<span class="taxonomy-flag" title="${escapeHtml(t("taxonomyFlag"))}">${escapeHtml(t("taxonomyFlagShort"))}</span>` : ""}
      </article>
    `;
  }

  function thumbnailPath(imagePath) {
    return imagePath.replace(/^images\//, "thumbnails/").replace(/\.jpe?g$/i, ".webp");
  }

  function renderCabinet() {
    if (!visibleSpecies.length) {
      elements.cabinet.innerHTML = `
        <div class="empty-state">
          <i data-lucide="search-x" aria-hidden="true"></i>
          <h2>${escapeHtml(t("emptyTitle"))}</h2>
          <p>${escapeHtml(t("emptyText"))}</p>
          <button type="button" data-empty-reset>${escapeHtml(t("clearFilters"))}</button>
        </div>
      `;
      iconize();
      return;
    }

    const groups = utils.groupSpecies(visibleSpecies, state.sort);
    let imageIndex = 0;
    elements.cabinet.innerHTML = groups.map((group, groupIndex) => {
      const cards = group.items.map((entry) => specimenCard(entry, imageIndex++)).join("");
      const commonName = taxonCommonName(group.label, group.chineseName);
      const groupLabel = state.sort === "taxonomy"
        ? `<p>${escapeHtml(t("genusIndex", { index: String(groupIndex + 1).padStart(2, "0") }))}</p><h2><i>${escapeHtml(group.label)}</i>${commonName ? `<span>${escapeHtml(commonName)}</span>` : ""}</h2>`
        : `<p>REGISTER</p><h2>${escapeHtml(t("results"))}</h2>`;

      return `
        <section class="genus-shelf" aria-labelledby="group-${groupIndex}">
          <header class="shelf-label" id="group-${groupIndex}">
            <div>${groupLabel}</div>
            <span>${escapeHtml(t("items", { count: String(group.items.length).padStart(2, "0") }))}</span>
          </header>
          <div class="specimen-grid">${cards}</div>
        </section>
      `;
    }).join("");
  }

  function auditStatus(value, type, label) {
    if (!value) return '<span class="audit-empty">—</span>';
    return `<span class="audit-status"><i class="status-dot ${escapeHtml(type)}" aria-hidden="true"></i>${escapeHtml(label)}</span>`;
  }

  function renderAudit() {
    if (!visibleSpecies.length) {
      elements.auditBody.innerHTML = `<tr><td colspan="6" class="empty-table">${escapeHtml(t("noResults"))}</td></tr>`;
      return;
    }

    elements.auditBody.innerHTML = visibleSpecies.map((entry) => {
      const level = entry.protectionLevel || {};
      const localized = speciesText(entry);
      const chinaType = level.chinaLevel ? `china-${level.chinaLevel.toLowerCase()}` : "";
      const citesType = level.cites ? `cites-${level.cites.toLowerCase()}` : "";
      return `
        <tr data-open="${escapeHtml(entry.id)}" tabindex="0" aria-label="${escapeHtml(t("openRecord", { name: localized.name }))}"
          class="${state.selectedId === entry.id ? "is-selected" : ""}">
          <td><span class="table-code">${escapeHtml(entry.code)}</span></td>
          <td>
            <strong>${escapeHtml(localized.name)}</strong>
            <i>${escapeHtml(entry.scientificName)}</i>
          </td>
          <td>${auditStatus(level.cites, citesType, t("appendix", { level: level.cites }))}</td>
          <td>${auditStatus(level.chinaLevel, chinaType, chinaLevelLabel(level.chinaLevel))}</td>
          <td>${entry.iucnCode ? `<span class="iucn-code">${escapeHtml(entry.iucnCode)}</span>` : `<span class="audit-empty">${escapeHtml(t("noRecord"))}</span>`}</td>
          <td>${entry.taxonomyNote
            ? `<span class="audit-status"><i class="status-dot taxonomy" aria-hidden="true"></i>${escapeHtml(t("compareNeeded"))}</span>`
            : '<span class="audit-empty">—</span>'}</td>
        </tr>
      `;
    }).join("");
  }

  function renderResults() {
    visibleSpecies = utils.filterCatalog(allSpecies, state);
    if (state.language === "en" && state.sort === "chinese") {
      visibleSpecies.sort((a, b) => speciesText(a).name.localeCompare(speciesText(b).name, "en"));
    }
    elements.resultIndex.textContent = String(visibleSpecies.length).padStart(3, "0");
    elements.filterSummary.textContent = t("showing", { visible: visibleSpecies.length, total: totals.total });
    renderSummary();
    renderCabinet();
    renderAudit();
    updateDetailNavigation();
  }

  function lineageHtml(entry) {
    return entry.lineage.map((taxon) => `
      <span>
        <small>${escapeHtml(rankLabel(taxon.rank))}</small>
        <i>${escapeHtml(taxon.scientificName)}</i>
      </span>
    `).join("");
  }

  function detailStatus(entry) {
    const level = entry.protectionLevel || {};
    return `
      <dl class="detail-status-grid">
        <div>
          <dt>CITES</dt>
          <dd>${level.cites ? escapeHtml(t("appendix", { level: level.cites })) : escapeHtml(t("notListed"))}</dd>
        </div>
        <div>
          <dt>${escapeHtml(t("chinaList"))}</dt>
          <dd>${escapeHtml(chinaLevelLabel(level.chinaLevel))}</dd>
        </div>
        <div>
          <dt>IUCN</dt>
          <dd>${escapeHtml(iucnLabel(entry))}</dd>
        </div>
      </dl>
    `;
  }

  function renderDetail(entry) {
    const localized = speciesText(entry);
    const chineseNames = [entry.chineseName, ...(entry.alternativeChineseNames || [])];
    const alternatives = state.language === "en"
      ? `<p class="alternative-names">${escapeHtml(t("chineseName"))}: ${chineseNames.map(escapeHtml).join(" · ")}</p>`
      : (entry.alternativeChineseNames || []).length
        ? `<p class="alternative-names">${escapeHtml(t("aliases", { names: entry.alternativeChineseNames.join("、") }))}</p>`
        : "";
    const citesBasis = localized.citesBasis
      ? `<section class="detail-section"><h3>${escapeHtml(t("citesBasis"))}</h3><p>${escapeHtml(localized.citesBasis)}</p></section>`
      : "";
    const taxonomy = localized.taxonomy
      ? `<section class="detail-section taxonomy-section"><p class="section-label">TAXONOMY NOTE</p><h3>${escapeHtml(t("taxonomy"))}</h3><p>${escapeHtml(localized.taxonomy)}</p></section>`
      : "";

    elements.detailCode.textContent = entry.code;
    elements.detailContent.innerHTML = `
      <figure class="detail-specimen">
        <img src="${escapeHtml(entry.imagePath)}" alt="${escapeHtml(t("specimenAlt", { name: localized.name }))}" width="1024" height="640">
        <figcaption>${escapeHtml(t("guideImageCaption"))}</figcaption>
      </figure>

      <section class="detail-identity">
        <div class="detail-badges">${protectionBadges(entry, true)}</div>
        <h2>${escapeHtml(localized.name)}</h2>
        <p class="detail-latin"><i>${escapeHtml(entry.scientificName)}</i> ${escapeHtml(entry.author)}</p>
        ${alternatives}
      </section>

      <div class="lineage-strip" aria-label="${escapeHtml(t("lineage"))}">${lineageHtml(entry)}</div>
      ${detailStatus(entry)}

      <section class="detail-section range-section">
        <p class="section-label">RANGE</p>
        <h3>${escapeHtml(t("range"))}</h3>
        <p>${escapeHtml(localized.range)}</p>
      </section>

      <section class="detail-section">
        <p class="section-label">PROFILE</p>
        <h3>${escapeHtml(t("profile"))}</h3>
        <p>${escapeHtml(localized.profile)}</p>
      </section>

      <section class="detail-section">
        <h3>${escapeHtml(t("catalogNote"))}</h3>
        <p>${escapeHtml(localized.note)}</p>
      </section>
      ${taxonomy}
      ${citesBasis}
    `;
  }

  function findSpecies(id) {
    return allSpecies.find((entry) => entry.id === id);
  }

  function openDetail(id, options) {
    const entry = findSpecies(id);
    if (!entry) return;

    if (options?.trigger) detailTrigger = options.trigger;
    state.selectedId = id;
    renderDetail(entry);
    elements.detailPanel.inert = false;
    elements.detailPanel.setAttribute("aria-hidden", "false");
    elements.appFrame.classList.add("detail-open");
    syncSelectedRows();
    updateDetailNavigation();
    closeMobileFilters();
    updateHash();

    if (options?.focus && window.matchMedia("(max-width: 760px)").matches) {
      elements.closeDetail.focus();
    }
  }

  function closeDetail(options) {
    const currentResults = state.view === "audit" ? elements.auditBody : elements.cabinet;
    const selectedTarget = currentResults.querySelector(`[data-open="${state.selectedId}"]`);
    const focusTarget = detailTrigger?.getClientRects().length ? detailTrigger : selectedTarget;
    state.selectedId = "";
    elements.detailPanel.setAttribute("aria-hidden", "true");
    elements.detailPanel.inert = true;
    elements.appFrame.classList.remove("detail-open");
    syncSelectedRows();
    updateHash();

    if (options?.restoreFocus !== false && focusTarget?.isConnected) focusTarget.focus();
    detailTrigger = null;
  }

  function syncSelectedRows() {
    document.querySelectorAll("[data-open]").forEach((node) => {
      const selected = Boolean(state.selectedId) && node.dataset.open === state.selectedId;
      node.classList.toggle("is-selected", selected);
      if (node.classList.contains("specimen-drawer")) {
        node.setAttribute("aria-current", selected ? "true" : "false");
      }
    });
  }

  function detailSequence() {
    if (visibleSpecies.some((entry) => entry.id === state.selectedId)) return visibleSpecies;
    return allSpecies;
  }

  function updateDetailNavigation() {
    const sequence = detailSequence();
    const index = sequence.findIndex((entry) => entry.id === state.selectedId);
    const inactive = index === -1;
    elements.previousSpecies.disabled = inactive || sequence.length < 2;
    elements.nextSpecies.disabled = inactive || sequence.length < 2;
  }

  function moveDetail(offset) {
    const sequence = detailSequence();
    const index = sequence.findIndex((entry) => entry.id === state.selectedId);
    if (index === -1 || sequence.length < 2) return;
    const target = sequence[(index + offset + sequence.length) % sequence.length];
    openDetail(target.id);
  }

  function setView(view, shouldUpdateHash) {
    state.view = view === "audit" ? "audit" : "cabinet";
    const showAudit = state.view === "audit";
    elements.cabinetView.hidden = showAudit;
    elements.auditView.hidden = !showAudit;

    document.querySelectorAll("[data-view]").forEach((button) => {
      const active = button.dataset.view === state.view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (shouldUpdateHash !== false) updateHash();
  }

  function updateHash() {
    const suffix = state.selectedId ? `/${state.selectedId}` : "";
    const nextHash = `#/${state.view}${suffix}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }

  function readHash() {
    const match = window.location.hash.match(/^#\/(cabinet|audit)(?:\/(sp\d+))?$/);
    if (!match) return;
    setView(match[1], false);
    if (match[2] && findSpecies(match[2])) {
      openDetail(match[2]);
    } else if (state.selectedId) {
      closeDetail({ restoreFocus: false });
    }
  }

  function syncFilterInputs() {
    elements.filterForm.querySelectorAll('input[name="protection"]').forEach((input) => {
      input.checked = state.protection.has(input.value);
    });
    elements.filterForm.querySelector('input[name="taxonomy-note"]').checked = state.taxonomyNote;
  }

  function resetFilters() {
    elements.filterForm.reset();
    state.query = "";
    state.family = "all";
    state.genus = "all";
    state.iucn = "all";
    state.protection.clear();
    state.taxonomyNote = false;
    state.sort = "taxonomy";
    elements.sort.value = state.sort;
    refreshGenusOptions();
    renderResults();
  }

  function openMobileFilters() {
    document.body.classList.add("filters-open");
    elements.openFilters.setAttribute("aria-expanded", "true");
    elements.search.focus();
  }

  function closeMobileFilters() {
    document.body.classList.remove("filters-open");
    elements.openFilters.setAttribute("aria-expanded", "false");
  }

  function renderSources() {
    const methodology = data.methodology || {};
    const localizedSources = i18n.SOURCE_TEXT[state.language] || i18n.SOURCE_TEXT.zh;
    elements.scopeNote.textContent = t("scopeNote");
    elements.verifiedDate.textContent = methodology.lastVerified || "—";
    elements.sourceList.innerHTML = (methodology.sources || []).map((source, index) => `
      <a href="${escapeHtml(safeExternalUrl(source.url))}" target="_blank" rel="noopener noreferrer"
        aria-label="${escapeHtml(t("sourceVisit", { name: localizedSources[index]?.name || source.name }))}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(localizedSources[index]?.name || source.name)}</strong>
        <small>${escapeHtml(localizedSources[index]?.scope || source.scope)}</small>
      </a>
    `).join("");
  }

  function openSources() {
    if (typeof elements.sourceDialog.showModal === "function") {
      elements.sourceDialog.showModal();
    } else {
      elements.sourceDialog.setAttribute("open", "");
    }
  }

  function closeSources() {
    if (typeof elements.sourceDialog.close === "function") {
      elements.sourceDialog.close();
    } else {
      elements.sourceDialog.removeAttribute("open");
    }
  }

  function handleOpenTarget(event) {
    const target = event.target.closest("[data-open]");
    if (!target) return;
    openDetail(target.dataset.open, { focus: true, trigger: target });
  }

  function handleOpenKey(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest("[data-open]");
    if (!target) return;
    event.preventDefault();
    openDetail(target.dataset.open, { focus: true, trigger: target });
  }

  function bindEvents() {
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.addEventListener("click", () => setView(button.dataset.view));
    });

    elements.search.addEventListener("input", () => {
      state.query = elements.search.value;
      renderResults();
    });

    elements.family.addEventListener("change", () => {
      state.family = elements.family.value;
      refreshGenusOptions();
      renderResults();
    });

    elements.genus.addEventListener("change", () => {
      state.genus = elements.genus.value;
      renderResults();
    });

    elements.iucn.addEventListener("change", () => {
      state.iucn = elements.iucn.value;
      renderResults();
    });

    elements.sort.addEventListener("change", () => {
      state.sort = elements.sort.value;
      renderResults();
    });

    elements.filterForm.addEventListener("change", (event) => {
      if (event.target.name === "protection") {
        if (event.target.checked) state.protection.add(event.target.value);
        else state.protection.delete(event.target.value);
      } else if (event.target.name === "taxonomy-note") {
        state.taxonomyNote = event.target.checked;
      } else {
        return;
      }
      renderResults();
    });

    elements.resetFilters.addEventListener("click", (event) => {
      event.preventDefault();
      resetFilters();
    });

    elements.summaryStrip.addEventListener("click", (event) => {
      const button = event.target.closest("[data-summary-filter]");
      if (!button) return;
      const token = button.dataset.summaryFilter;
      const wasOnlyActive = token && state.protection.size === 1 && state.protection.has(token) && !state.taxonomyNote;
      state.protection.clear();
      state.taxonomyNote = false;
      if (token && !wasOnlyActive) state.protection.add(token);
      syncFilterInputs();
      renderResults();
    });

    elements.cabinet.addEventListener("click", (event) => {
      if (event.target.closest("[data-empty-reset]")) {
        resetFilters();
        return;
      }
      handleOpenTarget(event);
    });
    elements.cabinet.addEventListener("keydown", handleOpenKey);
    elements.auditBody.addEventListener("click", handleOpenTarget);
    elements.auditBody.addEventListener("keydown", handleOpenKey);

    elements.closeDetail.addEventListener("click", () => closeDetail());
    elements.previousSpecies.addEventListener("click", () => moveDetail(-1));
    elements.nextSpecies.addEventListener("click", () => moveDetail(1));

    elements.openFilters.addEventListener("click", openMobileFilters);
    elements.closeFilters.addEventListener("click", closeMobileFilters);
    elements.filterScrim.addEventListener("click", closeMobileFilters);

    elements.openSources.addEventListener("click", openSources);
    elements.closeSources.addEventListener("click", closeSources);
    elements.languageToggle.addEventListener("click", () => {
      setLanguage(state.language === "en" ? "zh" : "en");
    });
    elements.sourceDialog.addEventListener("click", (event) => {
      if (event.target === elements.sourceDialog) closeSources();
    });

    window.addEventListener("hashchange", readHash);
    document.addEventListener("keydown", (event) => {
      const tagName = document.activeElement?.tagName;
      const isTyping = tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";

      if (event.key === "Escape") {
        if (elements.sourceDialog.open) closeSources();
        else if (document.body.classList.contains("filters-open")) closeMobileFilters();
        else if (state.selectedId) closeDetail();
      }

      if (!isTyping && state.selectedId && event.key === "ArrowLeft") moveDetail(-1);
      if (!isTyping && state.selectedId && event.key === "ArrowRight") moveDetail(1);
    });
  }

  function initialize() {
    localizeStaticContent();
    persistLanguage(state.language);
    populateTaxonomyFilters();
    renderFilterCounts();
    renderSources();
    bindEvents();
    renderResults();
    setView("cabinet", false);
    readHash();
    if (!window.location.hash) updateHash();
    iconize();
  }

  initialize();
})();
