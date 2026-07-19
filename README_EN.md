# Wing Register

[中文说明](README.md)

A bilingual digital archive presenting 58 protected butterfly catalog entries through specimen-cabinet and register views.

- Chinese live site: [seanwong17.github.io/butterfly-registry](https://seanwong17.github.io/butterfly-registry/)
- English live site: [seanwong17.github.io/butterfly-registry/?lang=en](https://seanwong17.github.io/butterfly-registry/?lang=en)

![Wing Register protected butterfly archive](docs/wing-register-preview.png)

## Overview

Wing Register uses a natural-history cabinet as its primary browsing surface and adds a compact register for cross-checking. The cabinet supports rapid visual, generic, and geographic browsing, while the register places CITES, China's national protection list, recorded IUCN assessments, and source-specific taxonomic treatments side by side.

The project currently contains 58 catalog entries and 58 consistently formatted reference images. Each record includes common and scientific names, authorship, taxonomic lineage, range, morphology, protection status, a catalog note, and a taxonomic treatment where required.

## Features

- Specimen cabinet and register cross-check views
- Combined filters for protection frameworks, archive flags, family, genus, and IUCN records
- Full-text search across Chinese and English names, scientific names, ranges, and profiles
- Taxonomic, common-name, scientific-name, and protection-priority sorting
- Detailed records for all 58 entries with previous and next navigation
- Complete Chinese and English I18N support with shareable URLs and local preference persistence
- Responsive desktop and mobile interface with no build step

## Scope And References

Counts refer to `rank=species` entries in this catalog, not to every protected butterfly species worldwide. Entries covered by CITES genus-level listings are counted individually here. When statutory lists and taxonomic databases use different species boundaries, the relevant source treatments are retained in each record.

Non-image data is cross-checked primarily against these resources:

- [CITES Checklist of Species](https://checklist.cites.org/): appendix status, genus-level coverage, and convention nomenclature.
- [China's List of National Key Protected Wild Animals (2021)](https://www.gov.cn/zhengce/2021-02/05/content_5727412.htm): National Class I and II status and statutory names.
- [GBIF Backbone Taxonomy](https://www.gbif.org/species/search): accepted names, synonyms, authorships, and taxonomic hierarchy.
- [IUCN Red List](https://www.iucnredlist.org/): threat categories and assessment details explicitly recorded in the archive; an empty field means not recorded here, not Least Concern.
- [Species+](https://speciesplus.net/): supplementary checks on international trade controls, distribution, and taxon concepts.

The current guide images were produced from public data and standardized for display.

Corrections to names, ranges, protection status, taxonomy, or imagery are welcome through [GitHub Issues](https://github.com/SeanWong17/butterfly-registry/issues).

## I18N And Local Use

Chinese is the default language. Use the language button in the top-right corner or open the shareable English URL directly:

```text
https://seanwong17.github.io/butterfly-registry/?lang=en
```

Run locally:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`. Run the data and application-logic tests with:

```bash
npm test
```

## License

This project is released under the [MIT License](LICENSE).
