(function startWingRegister() {
  "use strict";

  const utils = window.CatalogUtils;
  const data = window.BUTTERFLY_DATA || (typeof BUTTERFLY_DATA !== "undefined" ? BUTTERFLY_DATA : null);

  if (!utils || !data) {
    document.body.innerHTML = '<main class="fatal-error"><h1>档案加载失败</h1><p>数据文件或目录工具未能载入。</p></main>';
    return;
  }

  const allSpecies = utils.flattenCatalog(data);
  const totals = utils.summarize(allSpecies);
  const state = {
    view: "cabinet",
    query: "",
    family: "all",
    genus: "all",
    iucn: "all",
    protection: new Set(),
    sort: "taxonomy",
    selectedId: ""
  };
  let visibleSpecies = allSpecies.slice();

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
    sourceList: document.getElementById("source-list")
  };

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
      option.value = taxon.scientificName;
      option.textContent = taxon.chineseName
        ? `${taxon.chineseName} · ${taxon.scientificName}`
        : taxon.scientificName;
      select.append(option);
    });
  }

  function populateTaxonomyFilters() {
    appendTaxonOptions(elements.family, uniqueTaxa("family", "familyChinese", allSpecies), "全部科");
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

    appendTaxonOptions(elements.genus, genera, "全部属");
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
      { token: "", value: totals.total, label: "名录条目", className: "total" },
      { token: "cites-I", value: totals.citesI, label: "CITES I", className: "cites-i" },
      { token: "cites-II", value: totals.citesII, label: "CITES II", className: "cites-ii" },
      { token: "china-I", value: totals.chinaI, label: "中国一级", className: "china-i" },
      { token: "china-II", value: totals.chinaII, label: "中国二级", className: "china-ii" }
    ];

    elements.summaryStrip.innerHTML = metrics.map((metric) => {
      const active = metric.token
        ? state.protection.size === 1 && state.protection.has(metric.token)
        : state.protection.size === 0;
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
      badges.push(`<span class="status-badge china-${level.chinaLevel.toLowerCase()}">中国${level.chinaLevel === "I" ? "一级" : "二级"}</span>`);
    }
    if (includeIucn && entry.iucnCode) {
      badges.push(`<span class="status-badge iucn">IUCN ${escapeHtml(entry.iucnCode)}</span>`);
    }

    return badges.join("");
  }

  function specimenCard(entry, imageIndex) {
    const selected = state.selectedId === entry.id;
    const loading = imageIndex < 8 ? "eager" : "lazy";

    return `
      <article class="specimen-drawer${selected ? " is-selected" : ""}" data-open="${escapeHtml(entry.id)}"
        tabindex="0" role="button" aria-label="打开${escapeHtml(entry.chineseName)}档案" aria-current="${selected ? "true" : "false"}">
        <div class="drawer-number">
          <span>${escapeHtml(entry.code)}</span>
          <span>${escapeHtml(entry.family)}</span>
        </div>
        <div class="specimen-stage">
          <img src="${escapeHtml(entry.imagePath)}" alt="${escapeHtml(entry.chineseName)}背面展翅导览图"
            loading="${loading}" decoding="async" width="1024" height="640">
          <div class="protection-tabs">${protectionBadges(entry, true)}</div>
        </div>
        <div class="drawer-caption">
          <h3>${escapeHtml(entry.chineseName)}</h3>
          <p class="scientific-name">${escapeHtml(entry.scientificName)}</p>
          <p class="drawer-range" title="${escapeHtml(entry.distribution)}">${escapeHtml(entry.distribution)}</p>
        </div>
        ${entry.taxonomyNote ? '<span class="taxonomy-flag" title="含分类口径说明">TAXON NOTE</span>' : ""}
      </article>
    `;
  }

  function renderCabinet() {
    if (!visibleSpecies.length) {
      elements.cabinet.innerHTML = `
        <div class="empty-state">
          <i data-lucide="search-x" aria-hidden="true"></i>
          <h2>没有匹配的档案</h2>
          <p>当前筛选条件没有交集。</p>
          <button type="button" data-empty-reset>清除筛选</button>
        </div>
      `;
      iconize();
      return;
    }

    const groups = utils.groupSpecies(visibleSpecies, state.sort);
    let imageIndex = 0;
    elements.cabinet.innerHTML = groups.map((group, groupIndex) => {
      const cards = group.items.map((entry) => specimenCard(entry, imageIndex++)).join("");
      const groupLabel = state.sort === "taxonomy"
        ? `<p>GENUS ${String(groupIndex + 1).padStart(2, "0")}</p><h2><i>${escapeHtml(group.label)}</i>${group.chineseName ? `<span>${escapeHtml(group.chineseName)}</span>` : ""}</h2>`
        : `<p>REGISTER</p><h2>${escapeHtml(group.label)}</h2>`;

      return `
        <section class="genus-shelf" aria-labelledby="group-${groupIndex}">
          <header class="shelf-label" id="group-${groupIndex}">
            <div>${groupLabel}</div>
            <span>${String(group.items.length).padStart(2, "0")} 件</span>
          </header>
          <div class="specimen-grid">${cards}</div>
        </section>
      `;
    }).join("");
  }

  function auditStatus(value, type, prefix) {
    if (!value) return '<span class="audit-empty">—</span>';
    return `<span class="audit-status"><i class="status-dot ${escapeHtml(type)}" aria-hidden="true"></i>${escapeHtml(prefix)}${escapeHtml(value)}</span>`;
  }

  function renderAudit() {
    if (!visibleSpecies.length) {
      elements.auditBody.innerHTML = '<tr><td colspan="6" class="empty-table">没有匹配的名录条目</td></tr>';
      return;
    }

    elements.auditBody.innerHTML = visibleSpecies.map((entry) => {
      const level = entry.protectionLevel || {};
      const chinaType = level.chinaLevel ? `china-${level.chinaLevel.toLowerCase()}` : "";
      const citesType = level.cites ? `cites-${level.cites.toLowerCase()}` : "";
      return `
        <tr data-open="${escapeHtml(entry.id)}" tabindex="0" aria-label="打开${escapeHtml(entry.chineseName)}档案"
          class="${state.selectedId === entry.id ? "is-selected" : ""}">
          <td><span class="table-code">${escapeHtml(entry.code)}</span></td>
          <td>
            <strong>${escapeHtml(entry.chineseName)}</strong>
            <i>${escapeHtml(entry.scientificName)}</i>
          </td>
          <td>${auditStatus(level.cites, citesType, "附录 ")}</td>
          <td>${auditStatus(level.chinaLevel, chinaType, "国家 ")}</td>
          <td>${entry.iucnCode ? `<span class="iucn-code">${escapeHtml(entry.iucnCode)}</span>` : '<span class="audit-empty">未记录</span>'}</td>
          <td>${entry.taxonomyNote
            ? '<span class="audit-status"><i class="status-dot taxonomy" aria-hidden="true"></i>需对照</span>'
            : '<span class="audit-empty">—</span>'}</td>
        </tr>
      `;
    }).join("");
  }

  function renderResults() {
    visibleSpecies = utils.filterCatalog(allSpecies, state);
    elements.resultIndex.textContent = String(visibleSpecies.length).padStart(3, "0");
    elements.filterSummary.textContent = `显示 ${visibleSpecies.length} / ${totals.total}`;
    renderSummary();
    renderCabinet();
    renderAudit();
    updateDetailNavigation();
  }

  function lineageHtml(entry) {
    return entry.lineage.map((taxon) => `
      <span>
        <small>${escapeHtml(taxon.rank)}</small>
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
          <dd>${level.cites ? `附录 ${escapeHtml(level.cites)}` : "未列入"}</dd>
        </div>
        <div>
          <dt>中国名录</dt>
          <dd>${level.chinaLevel ? `国家${level.chinaLevel === "I" ? "一级" : "二级"}` : "未列入"}</dd>
        </div>
        <div>
          <dt>IUCN</dt>
          <dd>${entry.iucnStatus ? escapeHtml(entry.iucnStatus) : "本页未记录"}</dd>
        </div>
      </dl>
    `;
  }

  function renderDetail(entry) {
    const alternatives = (entry.alternativeChineseNames || []).length
      ? `<p class="alternative-names">别名：${entry.alternativeChineseNames.map(escapeHtml).join("、")}</p>`
      : "";
    const citesBasis = entry.citesBasis
      ? `<section class="detail-section"><h3>CITES 列名依据</h3><p>${escapeHtml(entry.citesBasis)}</p></section>`
      : "";
    const taxonomy = entry.taxonomyNote
      ? `<section class="detail-section taxonomy-section"><p class="section-label">TAXONOMY NOTE</p><h3>分类口径</h3><p>${escapeHtml(entry.taxonomyNote)}</p></section>`
      : "";

    elements.detailCode.textContent = entry.code;
    elements.detailContent.innerHTML = `
      <figure class="detail-specimen">
        <img src="${escapeHtml(entry.imagePath)}" alt="${escapeHtml(entry.chineseName)}背面展翅导览图" width="1024" height="640">
        <figcaption>导览图像 · 非科研鉴定依据</figcaption>
      </figure>

      <section class="detail-identity">
        <div class="detail-badges">${protectionBadges(entry, true)}</div>
        <h2>${escapeHtml(entry.chineseName)}</h2>
        <p class="detail-latin"><i>${escapeHtml(entry.scientificName)}</i> ${escapeHtml(entry.author)}</p>
        ${alternatives}
      </section>

      <div class="lineage-strip" aria-label="分类路径">${lineageHtml(entry)}</div>
      ${detailStatus(entry)}

      <section class="detail-section range-section">
        <p class="section-label">RANGE</p>
        <h3>分布</h3>
        <p>${escapeHtml(entry.distribution)}</p>
      </section>

      <section class="detail-section">
        <p class="section-label">PROFILE</p>
        <h3>物种档案</h3>
        <p>${escapeHtml(entry.description)}</p>
      </section>

      <section class="detail-section">
        <h3>名录备注</h3>
        <p>${escapeHtml(entry.remarks)}</p>
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

    state.selectedId = id;
    renderDetail(entry);
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
    state.selectedId = "";
    elements.detailPanel.setAttribute("aria-hidden", "true");
    elements.appFrame.classList.remove("detail-open");
    syncSelectedRows();
    updateHash();

    if (options?.restoreFocus) {
      document.querySelector("[data-open].is-selected")?.focus();
    }
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
      closeDetail();
    }
  }

  function syncProtectionInputs() {
    elements.filterForm.querySelectorAll('input[name="protection"]').forEach((input) => {
      input.checked = state.protection.has(input.value);
    });
  }

  function resetFilters() {
    elements.filterForm.reset();
    state.query = "";
    state.family = "all";
    state.genus = "all";
    state.iucn = "all";
    state.protection.clear();
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
    elements.scopeNote.textContent = methodology.scopeNote || "统计对象为本页名录条目。";
    elements.verifiedDate.textContent = methodology.lastVerified || "—";
    elements.sourceList.innerHTML = (methodology.sources || []).map((source, index) => `
      <a href="${escapeHtml(safeExternalUrl(source.url))}" target="_blank" rel="noopener noreferrer">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(source.name)}</strong>
        <small>${escapeHtml(source.scope)}</small>
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
    openDetail(target.dataset.open, { focus: true });
  }

  function handleOpenKey(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest("[data-open]");
    if (!target) return;
    event.preventDefault();
    openDetail(target.dataset.open, { focus: true });
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
      if (event.target.name !== "protection") return;
      if (event.target.checked) state.protection.add(event.target.value);
      else state.protection.delete(event.target.value);
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
      const wasOnlyActive = token && state.protection.size === 1 && state.protection.has(token);
      state.protection.clear();
      if (token && !wasOnlyActive) state.protection.add(token);
      syncProtectionInputs();
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
