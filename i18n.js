(function initWingI18n(globalObject, factory) {
  const api = factory();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalObject) {
    globalObject.WingI18n = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function createWingI18n() {
  const UI = {
    zh: {
      documentTitle: "翼录 | 受保护蝴蝶数字档案",
      metaDescription: "翼录收录58个受保护蝴蝶名录条目，对照展示CITES、中国国家重点保护名录、IUCN记录与分类口径。",
      skipLink: "跳到主要内容",
      brandName: "翼录",
      brandSeal: "翼",
      brandHome: "翼录首页",
      brandSubtitle: "WING REGISTER · 受保护蝴蝶档案",
      viewNavigation: "档案视图",
      cabinet: "标本柜",
      audit: "名录审计",
      language: "EN",
      languageTitle: "Switch to English",
      openFilters: "打开筛选",
      closeFilters: "关闭筛选",
      sources: "数据说明",
      filterPanel: "名录筛选",
      filterKicker: "CATALOG FILTER",
      filters: "筛选",
      searchLabel: "检索档案",
      searchPlaceholder: "中文名、学名、分布",
      protectionFramework: "保护框架",
      citesI: "CITES 附录 I",
      citesII: "CITES 附录 II",
      chinaI: "中国国家一级",
      chinaII: "中国国家二级",
      archiveFlags: "档案标记",
      taxonomyNotes: "分类口径说明",
      family: "科",
      allFamilies: "全部科",
      genus: "属",
      allGenera: "全部属",
      iucnRecords: "IUCN 记录",
      allStatuses: "全部状态",
      assessed: "有评估记录",
      unrecorded: "本页未记录",
      enStatus: "EN · 濒危",
      vuStatus: "VU · 易危",
      ntStatus: "NT · 近危",
      lcStatus: "LC · 无危",
      showing: "显示 {visible} / {total}",
      reset: "重置",
      collectionKicker: "COLLECTION 058 · VERIFIED 2026.07",
      catalogTitle: "受保护蝴蝶数字档案",
      catalogIntro: "以本页名录条目为统计单位，对照 CITES 与中国国家重点保护制度；不同来源的分类处理与图像局限单独标记。",
      catalogStatistics: "名录统计",
      records: "件档案",
      sort: "排列",
      taxonomyOrder: "分类顺序",
      commonNameOrder: "中文名",
      scientificOrder: "学名",
      priorityOrder: "保护优先",
      totalEntries: "名录条目",
      chinaLevelOne: "中国一级",
      chinaLevelTwo: "中国二级",
      genusIndex: "GENUS {index}",
      items: "{count} 件",
      results: "筛选结果",
      emptyTitle: "没有匹配的档案",
      emptyText: "当前筛选条件没有交集。",
      clearFilters: "清除筛选",
      openRecord: "打开{name}档案",
      specimenAlt: "{name}背面展翅导览图",
      taxonomyFlag: "含分类口径说明",
      taxonomyFlagShort: "TAXON NOTE",
      auditKicker: "REGISTER CROSS-CHECK",
      auditTitle: "保护名录对照",
      auditIntro: "法定名录、国际公约与全球分类数据库并不总采用相同的物种边界。这里保留本页采用的口径，不把“覆盖条目数”误写为全球独立物种数。",
      statusLegend: "状态图例",
      tableArchive: "档案",
      tableSpecies: "物种",
      tableChina: "中国名录",
      tableTaxonomy: "分类口径",
      appendix: "附录 {level}",
      nationalLevel: "国家 {level}",
      noRecord: "未记录",
      compareNeeded: "需对照",
      noResults: "没有匹配的名录条目",
      detailPanel: "物种档案详情",
      previousRecord: "上一件档案",
      nextRecord: "下一件档案",
      closeRecord: "关闭档案",
      guideImageCaption: "导览图像 · 非科研鉴定依据",
      chineseName: "中文名",
      aliases: "别名：{names}",
      cites: "CITES",
      chinaList: "中国名录",
      notListed: "未列入",
      range: "分布",
      profile: "物种档案",
      catalogNote: "名录备注",
      taxonomy: "分类口径",
      citesBasis: "CITES 列名依据",
      lineage: "分类路径",
      rankFamily: "科",
      rankSubfamily: "亚科",
      rankTribe: "族",
      rankGenus: "属",
      rankSubgenus: "亚属",
      sourceKicker: "SCOPE & PROVENANCE",
      sourceTitle: "数据范围与来源",
      closeSources: "关闭数据说明",
      statisticsScope: "统计口径",
      verifiedDate: "核验日期",
      catalogEntries: "名录条目",
      imageFormat: "图像规格",
      sourceEntrypoints: "非图像数据来源",
      imageOriginTitle: "图像说明",
      imageOriginText: "现有导览图基于公开数据制作并统一处理，仅用于浏览展示。",
      scopeNote: "统计对象为本页 rank=species 的名录条目，不代表全球所有受保护蝴蝶的物种总数。CITES 属级列名覆盖的中国名录条目按本页条目计入，并保留不同来源的分类处理说明。",
      sourceVisit: "访问来源：{name}",
      fatalTitle: "档案加载失败",
      fatalText: "数据文件或目录工具未能载入。",
      iucnEN: "EN（濒危）",
      iucnVU: "VU（易危）",
      iucnNT: "NT（近危）",
      iucnLC: "LC（无危）"
    },
    en: {
      documentTitle: "Wing Register | Protected Butterfly Archive",
      metaDescription: "Wing Register presents 58 protected butterfly catalog entries across CITES, China's national list, IUCN records, and documented taxonomic treatments.",
      skipLink: "Skip to main content",
      brandName: "Wing Register",
      brandSeal: "W",
      brandHome: "Wing Register home",
      brandSubtitle: "WING REGISTER · PROTECTED BUTTERFLY ARCHIVE",
      viewNavigation: "Archive views",
      cabinet: "Cabinet",
      audit: "Register",
      language: "中文",
      languageTitle: "切换至中文",
      openFilters: "Open filters",
      closeFilters: "Close filters",
      sources: "Sources",
      filterPanel: "Catalog filters",
      filterKicker: "CATALOG FILTER",
      filters: "Filters",
      searchLabel: "Search the archive",
      searchPlaceholder: "Name, taxon, or range",
      protectionFramework: "Protection framework",
      citesI: "CITES Appendix I",
      citesII: "CITES Appendix II",
      chinaI: "China National Class I",
      chinaII: "China National Class II",
      archiveFlags: "Archive flags",
      taxonomyNotes: "Taxonomic notes",
      family: "Family",
      allFamilies: "All families",
      genus: "Genus",
      allGenera: "All genera",
      iucnRecords: "IUCN record",
      allStatuses: "All statuses",
      assessed: "Assessment recorded",
      unrecorded: "Not recorded here",
      enStatus: "EN · Endangered",
      vuStatus: "VU · Vulnerable",
      ntStatus: "NT · Near Threatened",
      lcStatus: "LC · Least Concern",
      showing: "Showing {visible} of {total}",
      reset: "Reset",
      collectionKicker: "COLLECTION 058 · VERIFIED 2026.07",
      catalogTitle: "Protected Butterfly Digital Archive",
      catalogIntro: "A catalog-entry view across CITES and China's national protection system, with taxonomic differences and image limitations marked separately.",
      catalogStatistics: "Catalog statistics",
      records: "records",
      sort: "Sort",
      taxonomyOrder: "Taxonomic order",
      commonNameOrder: "Common name",
      scientificOrder: "Scientific name",
      priorityOrder: "Protection priority",
      totalEntries: "Catalog entries",
      chinaLevelOne: "China Class I",
      chinaLevelTwo: "China Class II",
      genusIndex: "GENUS {index}",
      items: "{count} records",
      results: "Filtered records",
      emptyTitle: "No matching records",
      emptyText: "No entry matches the current filters.",
      clearFilters: "Clear filters",
      openRecord: "Open the record for {name}",
      specimenAlt: "Dorsal reference view of {name}",
      taxonomyFlag: "Includes a taxonomic treatment note",
      taxonomyFlagShort: "TAXON NOTE",
      auditKicker: "REGISTER CROSS-CHECK",
      auditTitle: "Protection Register Cross-check",
      auditIntro: "Statutory lists, international conventions, and global taxonomic databases do not always use the same species boundaries. This view preserves the catalog treatment without presenting covered entries as a global species total.",
      statusLegend: "Status legend",
      tableArchive: "Record",
      tableSpecies: "Species",
      tableChina: "China",
      tableTaxonomy: "Taxonomy",
      appendix: "Appendix {level}",
      nationalLevel: "Class {level}",
      noRecord: "Not recorded",
      compareNeeded: "Review note",
      noResults: "No matching register entries",
      detailPanel: "Species record details",
      previousRecord: "Previous record",
      nextRecord: "Next record",
      closeRecord: "Close record",
      guideImageCaption: "Reference image · not an identification authority",
      chineseName: "Chinese name",
      aliases: "Chinese aliases: {names}",
      cites: "CITES",
      chinaList: "China list",
      notListed: "Not listed",
      range: "Range",
      profile: "Species profile",
      catalogNote: "Catalog note",
      taxonomy: "Taxonomic treatment",
      citesBasis: "Basis of CITES coverage",
      lineage: "Taxonomic lineage",
      rankFamily: "Family",
      rankSubfamily: "Subfamily",
      rankTribe: "Tribe",
      rankGenus: "Genus",
      rankSubgenus: "Subgenus",
      sourceKicker: "SCOPE & PROVENANCE",
      sourceTitle: "Scope and Sources",
      closeSources: "Close source information",
      statisticsScope: "Counting scope",
      verifiedDate: "Verified",
      catalogEntries: "Catalog entries",
      imageFormat: "Image format",
      sourceEntrypoints: "Non-image data sources",
      imageOriginTitle: "Image note",
      imageOriginText: "The current guide images were produced from public data and standardized for display.",
      scopeNote: "Counts refer to rank=species entries in this catalog, not to every protected butterfly species worldwide. Chinese statutory entries covered by CITES genus-level listings are counted as catalog entries, with source-specific taxonomic treatments retained.",
      sourceVisit: "Visit source: {name}",
      fatalTitle: "Archive failed to load",
      fatalText: "The catalog data or application utilities could not be loaded.",
      iucnEN: "EN (Endangered)",
      iucnVU: "VU (Vulnerable)",
      iucnNT: "NT (Near Threatened)",
      iucnLC: "LC (Least Concern)"
    }
  };

  const TAXA = {
    Papilionidae: "Swallowtails",
    Nymphalidae: "Brush-footed butterflies",
    Lycaenidae: "Gossamer-winged butterflies",
    Ornithoptera: "Birdwings",
    Troides: "Birdwings",
    Trogonoptera: "Rajah birdwings",
    Atrophaneura: "Batwings and roses",
    Losaria: "Clubtails",
    Teinopalpus: "Kaiser-i-Hinds",
    Papilio: "Swallowtails",
    Bhutanitis: "Bhutan glories",
    Luehdorfia: "Luehdorfias",
    Parnassius: "Apollos",
    Sasakia: "Purple emperors",
    Maculinea: "Large blues",
    Phengaris: "Large blues"
  };

  const SPECIES = {
    "Ornithoptera victoriae": {
      name: "Victoria's birdwing",
      range: "Solomon Islands biogeographic region, including the nation of Solomon Islands and Bougainville in Papua New Guinea",
      profile: "A large birdwing named for Queen Victoria. Males have black forewings with a green sheen and bright golden-green hindwing markings; larger females are brown with pale markings.",
      note: "Endemic to the Solomon Islands biogeographic region, which extends beyond the political border of Solomon Islands."
    },
    "Ornithoptera alexandrae": {
      name: "Queen Alexandra's birdwing",
      range: "Oro Province, Papua New Guinea",
      profile: "The world's largest butterfly. Females may span 25-31 cm, while the smaller males have long black forewings, blue-green hindwings, and a yellow abdomen.",
      note: "An Endangered Appendix I species with a minute rainforest range; commercial international trade is prohibited."
    },
    "Ornithoptera priamus": {
      name: "Common green birdwing",
      range: "Moluccas, New Guinea, Solomon Islands, and northeastern Australia",
      profile: "The type species of Ornithoptera and one of its most widespread, variable members. Males combine black forewings with vivid green or blue-green hindwings.",
      note: "Numerous geographic forms vary strongly in the balance of green and blue coloration."
    },
    "Ornithoptera croesus": {
      name: "Wallace's golden birdwing",
      range: "Bacan Islands, North Maluku, Indonesia",
      profile: "A Bacan Islands endemic documented by Alfred Russel Wallace. Males have dark, green-sheened forewings and golden-orange hindwings.",
      note: "This catalog treats it as a species; some historical sources place it within the O. priamus complex."
    },
    "Ornithoptera aesacus": {
      name: "Obi Island birdwing",
      range: "Obi Island, Indonesia",
      profile: "An Obi Island endemic whose males show yellow hindwing patches rather than the broad bands seen in many related birdwings.",
      note: "Its known range is restricted to a single island."
    },
    "Ornithoptera euphorion": {
      name: "Cairns birdwing",
      range: "Northeastern Queensland, Australia",
      profile: "Australia's largest endemic butterfly. Males have black forewings and luminous green hindwings and inhabit tropical rainforest in northeastern Queensland.",
      note: "This catalog treats it as a species; some sources use the combination Ornithoptera priamus euphorion."
    },
    "Ornithoptera richmondia": {
      name: "Richmond birdwing",
      range: "Northern New South Wales to southeastern Queensland, Australia",
      profile: "The southernmost Ornithoptera, adapted to subtropical rainforest edges. Males have a smaller green hindwing field than the Cairns birdwing.",
      note: "This catalog treats it as a species; some sources use the combination Ornithoptera priamus richmondia."
    },
    "Ornithoptera goliath": {
      name: "Goliath birdwing",
      range: "New Guinea and nearby islands",
      profile: "One of the world's largest butterflies. Females can reach 28 cm, while males carry broad yellow-green hindwing fields bordered by black markings.",
      note: "Often described as second in size only to Queen Alexandra's birdwing."
    },
    "Ornithoptera paradisea": {
      name: "Paradise birdwing",
      range: "New Guinea",
      profile: "A montane New Guinea birdwing whose males have golden or yellow-green hindwings prolonged into two narrow tails.",
      note: "The two elongated male hindwing tails provide a morphological character for comparison with related species."
    },
    "Ornithoptera meridionalis": {
      name: "Southern tailed birdwing",
      range: "Southern New Guinea",
      profile: "A localized birdwing with exceptionally fine, thread-like hindwing tails. Habitat loss remains its principal documented threat.",
      note: "Assessed as Near Threatened by IUCN in 2018."
    },
    "Ornithoptera chimaera": {
      name: "Chimaera birdwing",
      range: "Central mountains of New Guinea",
      profile: "A high-elevation birdwing of cloud forests around 1,500-2,500 m. Males have yellow-green hindwings with dark markings and short tails.",
      note: "Recorded from montane cloud forest at approximately 1,500-2,500 m."
    },
    "Ornithoptera tithonus": {
      name: "Tithonus birdwing",
      range: "Western New Guinea",
      profile: "A western New Guinea birdwing with yellow-green male hindwings and a wingspan of roughly 14-16 cm; parts of its field ecology remain poorly documented.",
      note: "Assessed as Least Concern by IUCN in 2018."
    },
    "Ornithoptera rothschildi": {
      name: "Rothschild's birdwing",
      range: "Arfak Mountains, western New Guinea",
      profile: "A narrow-range montane endemic named for Walter Rothschild. Males have black forewings and bright yellow-green hindwings.",
      note: "Restricted to the Arfak mountain system."
    },
    "Ornithoptera arfakensis": {
      name: "Arfak birdwing",
      range: "Arfak Mountains, western New Guinea",
      profile: "A tailed endemic of the Arfak Mountains that differs from O. paradisea in tail form and details of the wing pattern.",
      note: "This catalog treats it as a species; some sources use a subspecies or species-complex treatment.",
      taxonomy: "This catalog uses Ornithoptera arfakensis as a species. iNaturalist maintains a species entry, while GBIF Backbone had no corresponding species match on 2026-07-19.",
      citesBasis: "Ornithoptera spp., the genus-level CITES Appendix II listing"
    },
    "Troides hypolitus": {
      name: "Rippon's birdwing",
      range: "Sulawesi and the Moluccas, Indonesia",
      profile: "A basal Troides with an unusual female pattern: silver-gray streaks on the forewings and a mosaic of gold and pale hindwing patches, many with dark centers.",
      note: "Covered by the genus-level CITES listing for Troides spp."
    },
    "Troides aeacus": {
      name: "Golden birdwing",
      range: "Southern China, mainland Southeast Asia, the Malay Peninsula, and northeastern India",
      profile: "One of China's largest butterflies. Males have velvety black forewings, broad translucent golden hindwings, and conspicuous red hair along the thorax.",
      note: "Native to southern China and associated with tropical and subtropical forest."
    },
    "Troides helena": {
      name: "Common birdwing",
      range: "Southern China and widely across South and Southeast Asia",
      profile: "The type species of Troides. Its golden hindwing field is often more continuous than in T. aeacus because the marginal dark spots remain more separate from the dark veins.",
      note: "The distribution of black markings on the hindwing is a principal character separating it from T. aeacus."
    },
    "Troides magellanus": {
      name: "Magellan birdwing",
      range: "The Philippines and Lanyu, Taiwan",
      profile: "The hindwings display an opalescent blue-green structural sheen under oblique light; the effect is produced by scale microstructure rather than pigment.",
      note: "In China it occurs on Lanyu, where the local form has particular cultural and conservation importance."
    },
    "Troides amphrysus": {
      name: "Malay birdwing",
      range: "Malay Peninsula, Sumatra, Java, and Borneo",
      profile: "One of the largest Troides, with very broad forewings and an expansive golden hindwing field; females may exceed 20 cm in wingspan.",
      note: "Its broad forewings and large golden hindwing field resemble the proportions of Ornithoptera."
    },
    "Troides cuneifera": {
      name: "Wedge-spotted birdwing",
      range: "Southern Thailand, the Malay Peninsula, Sumatra, Java, and Borneo",
      profile: "A montane forest birdwing whose diffuse black wedges in the male golden hindwing field vary from prominent to absent.",
      note: "Identification from T. amphrysus uses locality together with multiple morphological characters."
    },
    "Troides miranda": {
      name: "Miranda birdwing",
      range: "Borneo",
      profile: "A Bornean montane species. Males show localized blue scaling on the black forewings under angled light and a golden hindwing with a broad dark terminal band.",
      note: "Its forewing sheen is distinct from the hindwing opalescence of T. magellanus."
    },
    "Troides andromache": {
      name: "Borneo birdwing",
      range: "Montane Borneo",
      profile: "A high-elevation birdwing associated with Bornean mountain rainforest above roughly 1,000 m.",
      note: "Its ecology is closely tied to montane forest."
    },
    "Troides haliphron": {
      name: "Haliphron birdwing",
      range: "Sulawesi and the Lesser Sunda Islands, Indonesia",
      profile: "Typical males have dark forewings and predominantly black hindwings, leaving only a narrow central band of about five golden patches.",
      note: "The extensive black hindwing area is a key visual character."
    },
    "Troides minos": {
      name: "Southern birdwing",
      range: "Western Ghats, southern India",
      profile: "A southern Indian endemic associated with tropical forest in the Western Ghats.",
      note: "Restricted to southern India."
    },
    "Troides rhadamantus": {
      name: "Philippine birdwing",
      range: "Philippine archipelago",
      profile: "A representative large birdwing found across several Philippine island groups, including Luzon, Mindoro, and the Visayas.",
      note: "Relatively widespread within the Philippines."
    },
    "Troides oblongomaculatus": {
      name: "Oblong-spotted birdwing",
      range: "Moluccas and New Guinea",
      profile: "An eastern Troides named for its elongated dark marginal hindwing spots and common across parts of the Moluccas.",
      note: "Its range extends east to New Guinea."
    },
    "Troides darsius": {
      name: "Sri Lanka birdwing",
      range: "Sri Lanka",
      profile: "A large Sri Lankan endemic with bright golden hindwings, associated especially with tropical rainforest in the island's southwest.",
      note: "One of Sri Lanka's largest butterflies."
    },
    "Troides vandepolli": {
      name: "Van de Poll's birdwing",
      range: "Sumatra and Java, Indonesia",
      profile: "A medium-sized Indonesian birdwing with a large central golden disc on the male hindwing surrounded by broad dark margins.",
      note: "The species includes geographic forms on both Sumatra and Java."
    },
    "Troides criton": {
      name: "Criton birdwing",
      range: "Moluccas, Indonesia",
      profile: "A regional Moluccan birdwing with a wingspan around 14-16 cm.",
      note: "Endemic to islands of the Moluccan region."
    },
    "Troides riedeli": {
      name: "Riedel's birdwing",
      range: "Tanimbar Islands, Indonesia",
      profile: "A southern Moluccan island endemic named for Johann Gerard Friedrich Riedel.",
      note: "Restricted to the Tanimbar Islands."
    },
    "Troides plato": {
      name: "Plato's birdwing",
      range: "Timor and nearby islands",
      profile: "An eastern Lesser Sunda birdwing discovered and named by Wallace, with a wingspan around 14-16 cm.",
      note: "A regional endemic of the Timor island group."
    },
    "Troides staudingeri": {
      name: "Staudinger's birdwing",
      range: "Southern Maluku island chain, including Damar, Babar, Moa, Leti, and Wetar",
      profile: "A southern Maluku birdwing whose island forms differ substantially in golden hindwing markings and degree of melanism.",
      note: "Reliable records center on southern Maluku rather than Mindanao."
    },
    "Troides dohertyi": {
      name: "Doherty's birdwing",
      range: "Talaud Islands, North Sulawesi, Indonesia",
      profile: "One of the most melanistic Troides. Typical males are almost entirely black above; the familiar golden band is chiefly a ventral feature.",
      note: "A highly melanistic Talaud endemic covered by the Troides genus listing."
    },
    "Troides prattorum": {
      name: "Buru birdwing",
      range: "Buru Island, Indonesia",
      profile: "A Buru endemic whose hindwings may show a blue-green iridescent sheen at certain angles.",
      note: "Covered by the genus-level CITES listing for Troides spp."
    },
    "Troides plateni": {
      name: "Platen's birdwing",
      range: "Palawan, Philippines",
      profile: "A Palawan endemic with a wingspan around 14-16 cm. This catalog treats it as a species; some sources use the combination Troides rhadamantus plateni.",
      note: "This catalog treats it as a species; some sources use the subspecies combination Troides rhadamantus plateni."
    },
    "Trogonoptera brookiana": {
      name: "Rajah Brooke's birdwing",
      range: "Malay Peninsula, Sumatra, and Borneo",
      profile: "Malaysia's national butterfly. Males have velvet-black wings crossed by connected emerald-green rays, large green hindwing fields, and vivid red on the head and body.",
      note: "Named for James Brooke and first documented by Alfred Russel Wallace."
    },
    "Trogonoptera trojana": {
      name: "Palawan Rajah birdwing",
      range: "Palawan, Philippines",
      profile: "A large Palawan endemic similar to Rajah Brooke's birdwing but with a smaller green hindwing field and a greater proportion of black.",
      note: "The reduced hindwing green area helps distinguish it from T. brookiana."
    },
    "Atrophaneura jophon": {
      name: "Sri Lankan rose",
      range: "Southwestern rainforest of Sri Lanka",
      profile: "A restricted-range Sri Lankan endemic with black wings, deep red to pink hindwing markings, and scalloped margins. Habitat loss has contributed to its Endangered status.",
      note: "Assessed as Endangered by IUCN in 2019.",
      taxonomy: "This catalog retains the protected-list combination Atrophaneura jophon; GBIF Backbone currently accepts Pachliopta jophon."
    },
    "Atrophaneura pandiyana": {
      name: "Malabar rose",
      range: "Western Ghats, southern India",
      profile: "A southern Indian endemic with black wings and pink to deep red hindwing markings, threatened by fragmentation of tropical forest habitat.",
      note: "Restricted to the Western Ghats.",
      taxonomy: "This catalog retains the protected-list combination Atrophaneura pandiyana; GBIF Backbone currently accepts Pachliopta pandiyana."
    },
    "Losaria coon": {
      name: "Common clubtail",
      range: "Southern China, South Asia, and Southeast Asia",
      profile: "A swallowtail named for the club-shaped tips of its hindwing tails and distributed from southern China through South and Southeast Asia.",
      note: "Protected under China's national list rather than a CITES listing."
    },
    "Teinopalpus aureus": {
      name: "Golden Kaiser-i-Hind",
      range: "Montane forests of southern China, Vietnam, and Laos",
      profile: "The only butterfly in China's current Class I national category. Males combine green-black wings with a large golden-orange hindwing patch and a long tail; females are larger and multi-tailed.",
      note: "China National Class I and CITES Appendix II."
    },
    "Teinopalpus imperialis": {
      name: "Kaiser-i-Hind",
      range: "Nepal, Bhutan, northern India, Myanmar, northern Thailand, northern Vietnam, and southwestern China",
      profile: "The type species of Teinopalpus, with emerald tones, a smaller yellow-gold hindwing patch than T. aureus, and multiple tails in the larger female.",
      note: "International trade requires CITES documentation."
    },
    "Papilio chikae": {
      name: "Luzon peacock swallowtail",
      range: "Northern Cordillera mountains of Luzon, Philippines",
      profile: "A narrow-range mountain swallowtail. Males have fine green-gold scaling on the forewings and a broad blue-green metallic band with red, blue, and black markings on the hindwings.",
      note: "CITES Appendix I and assessed as Endangered by IUCN."
    },
    "Papilio homerus": {
      name: "Homerus swallowtail",
      range: "Jamaica",
      profile: "The largest butterfly in the Western Hemisphere, with black wings marked by yellow bands and blue on the hindwings. It survives in two small Jamaican rainforest regions.",
      note: "An Endangered Appendix I species; commercial international trade is prohibited."
    },
    "Bhutanitis lidderdalii": {
      name: "Bhutan glory",
      range: "Bhutan, northeastern India, Myanmar, northern Thailand, Yunnan, and southeastern Tibet",
      profile: "The largest Bhutanitis, patterned with fine pale bars, three prominent hindwing eyespots, vivid red near the tornus, and long rounded tails.",
      note: "Recorded in the Himalaya; the Chinese range includes the Gaoligong Mountains and southeastern Tibet."
    },
    "Bhutanitis thaidina": {
      name: "Chinese three-tailed swallowtail",
      range: "Mountain regions of central and southwestern China",
      profile: "A Chinese endemic with three conspicuous hindwing tails, developed red markings, and broad pale bars on the forewings. Its type locality is Baoxing, Sichuan.",
      note: "Dependent on fragmented mountain habitats and Aristolochiaceae host plants."
    },
    "Bhutanitis mansfieldi": {
      name: "Mansfield's three-tailed swallowtail",
      range: "Sichuan and Yunnan, China",
      profile: "A Chinese endemic with limited distribution records, distinguished by irregular net-like pale markings and two prominent broad hindwing tails.",
      note: "Known from a restricted range in southwestern China."
    },
    "Bhutanitis ludlowi": {
      name: "Ludlow's Bhutan swallowtail",
      range: "Bhutan and Arunachal Pradesh, India",
      profile: "A Bhutanitis recorded again in 2009 after several decades without documented observations. It resembles B. thaidina but differs in finer pattern details.",
      note: "Assessed as Endangered; reliable records are from Bhutan and Arunachal Pradesh."
    },
    "Bhutanitis yulongensis": {
      name: "Yulong swallowtail",
      range: "Yulong Snow Mountain region, Yunnan, China",
      profile: "A Chinese statutory-list entry based on a taxon described from Yulong Snow Mountain and treated differently by international databases.",
      note: "Protected as a separate entry in China's 2021 national list.",
      taxonomy: "China's 2021 list treats this as a separate entry; CITES Checklist and GBIF place the name in synonymy with Bhutanitis thaidina.",
      citesBasis: "Bhutanitis spp., the genus-level CITES Appendix II listing"
    },
    "Bhutanitis nigrilima": {
      name: "Black-bordered Bhutan glory",
      range: "Southwestern China",
      profile: "A Chinese statutory-list entry whose species status differs between the national list and international taxonomic databases.",
      note: "Listed separately under Chinese law but generally treated internationally as a synonym of B. thaidina.",
      taxonomy: "China's 2021 list treats this as a separate entry; CITES Checklist and GBIF place the name in synonymy with Bhutanitis thaidina.",
      citesBasis: "Bhutanitis spp., the genus-level CITES Appendix II listing"
    },
    "Bhutanitis pulchristriata": {
      name: "Beautiful-striped Bhutan glory",
      range: "Mountains of southwestern China",
      profile: "A Chinese protected-list taxon treated as a species by China's 2021 list and GBIF, and as a form or subspecies of B. mansfieldi in some other sources.",
      note: "This catalog counts the independent entry used by China's statutory list.",
      taxonomy: "China's 2021 list and GBIF treat this as a species. CITES Checklist does not list the name separately, but the genus-level listing still covers the taxon.",
      citesBasis: "Bhutanitis spp., the genus-level CITES Appendix II listing"
    },
    "Luehdorfia chinensis": {
      name: "Chinese luehdorfia",
      range: "Lower and middle Yangtze region of China",
      profile: "A Chinese endemic with yellow wings crossed by black tiger-like bands, red marginal crescents, and short tails. Adults fly briefly in early spring.",
      note: "Protected under Chinese law and not listed by CITES."
    },
    "Parnassius apollo": {
      name: "Apollo butterfly",
      range: "European and Asian mountains from Scandinavia and the Alps through Central Asia to western Xinjiang, China",
      profile: "A translucent white mountain butterfly with black forewing spots and two large red hindwing eyespots. Many European populations have declined or disappeared.",
      note: "In China it is restricted to Xinjiang; covered by CITES Appendix II and China's Class II list."
    },
    "Parnassius imperator": {
      name: "Imperial Apollo",
      range: "High mountains of western China and the Tibetan Plateau region",
      profile: "An Asian high-mountain Apollo protected as a Class II animal under China's 2021 national list.",
      note: "Protected under Chinese law and not listed by CITES."
    },
    "Sasakia funebris": {
      name: "Dark purple emperor",
      range: "Sichuan, Guizhou, Hubei, Zhejiang, and other documented localities in China",
      profile: "A Chinese endemic whose males have dark wings with blue-black to violet velvet iridescence, a red forewing streak, and long pale V-shaped markings.",
      note: "A Chinese endemic protected under the national list and not listed by CITES."
    },
    "Sasakia pulcherrima": {
      name: "Beautiful purple emperor",
      range: "Reported from Sichuan and southern Gansu, China; taxonomy and reliable range require further review",
      profile: "A Chinese protected-list entry known from reported males with dark wings, basal blue-violet iridescence, narrow pale V-shaped forewing marks, and red near the hindwing tornus.",
      note: "China's statutory list uses a separate entry; GBIF Backbone provides no corresponding accepted-species match.",
      taxonomy: "China's 2021 list uses Sasakia pulcherrima as a separate entry. A GBIF source record gives Sasakia pulcherrima Chou & Li with BACKBONE_MATCH_NONE; some literature applies invalid-name or natural-hybrid treatments."
    },
    "Maculinea arionides": {
      name: "Large-spotted blue",
      range: "Parts of Central and East Asia, including China",
      profile: "A protected blue butterfly whose generic placement differs among legal and global taxonomic sources.",
      note: "Protected under China's national list and not listed by CITES.",
      taxonomy: "China's 2021 list uses Maculinea arionides; GBIF Backbone treats that combination as a synonym of Lycaena arionides."
    },
    "Phengaris xiushani": {
      name: "Xiushan's white blue",
      range: "Nujiang, Yunnan, China, including the type locality around 2,800 m",
      profile: "A creamy-white mountain blue with a broad black forewing margin and three deep black spots. Its type locality is in Nujiang, not Xiushan County, Chongqing.",
      note: "The name honors Xiushan Li; the type locality is recorded from Nujiang, Yunnan. Protected under China's national list."
    }
  };

  const SOURCE_TEXT = {
    zh: [
      { name: "CITES Checklist of Species", scope: "CITES 附录等级、属级列名与标准命名" },
      { name: "国家重点保护野生动物名录（2021）", scope: "中国国家一级、二级保护等级与法定名称" },
      { name: "GBIF Backbone Taxonomy", scope: "接受名、异名、命名人与分类层级交叉核对" },
      { name: "IUCN Red List", scope: "页面中明确记录的受威胁等级与评估信息" },
      { name: "Species+", scope: "国际贸易管控、分布与分类概念的补充核对" }
    ],
    en: [
      { name: "CITES Checklist of Species", scope: "Appendix status, genus-level listings, and standard nomenclature" },
      { name: "China's List of National Key Protected Wild Animals (2021)", scope: "National Class I and II status and statutory names" },
      { name: "GBIF Backbone Taxonomy", scope: "Accepted names, synonyms, authorships, and taxonomic hierarchy" },
      { name: "IUCN Red List", scope: "Threat categories and assessment details explicitly recorded in this catalog" },
      { name: "Species+", scope: "Supplementary checks on trade controls, ranges, and taxon concepts" }
    ]
  };

  function interpolate(template, values) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => values?.[key] ?? `{${key}}`);
  }

  function translate(language, key, values) {
    const dictionary = UI[language] || UI.zh;
    return interpolate(dictionary[key] || UI.zh[key] || key, values);
  }

  return { SOURCE_TEXT, SPECIES, TAXA, UI, interpolate, translate };
});
