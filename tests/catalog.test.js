const test = require('node:test');
const assert = require('node:assert/strict');

const { BUTTERFLY_DATA } = require('../data.js');
const {
  filterCatalog,
  flattenCatalog,
  groupSpecies,
  riskScore,
  summarize
} = require('../catalog.js');

const species = flattenCatalog(BUTTERFLY_DATA);

function filters(overrides = {}) {
  return {
    query: '',
    family: 'all',
    genus: 'all',
    iucn: 'all',
    protection: new Set(),
    taxonomyNote: false,
    sort: 'taxonomy',
    ...overrides
  };
}

test('tree data flattens into complete catalog records with stable codes', () => {
  assert.equal(species.length, 58);
  assert.equal(species[0].code, 'WR-001');
  assert.equal(species.at(-1).code, 'WR-058');
  assert.ok(species.every((entry) => entry.family && entry.genus && entry.imagePath));
  assert.equal(new Set(species.map((entry) => entry.code)).size, 58);
});

test('catalog summary matches the audited source statistics', () => {
  assert.deepEqual(summarize(species), {
    total: 58,
    citesI: 3,
    citesII: 48,
    chinaI: 1,
    chinaII: 23,
    taxonomyNotes: 8,
    iucnRecorded: 8
  });
});

test('search includes aliases, distribution, and taxonomy notes', () => {
  assert.equal(filterCatalog(species, filters({ query: '云南怒江' })).some((entry) => entry.scientificName === 'Phengaris xiushani'), true);
  assert.equal(filterCatalog(species, filters({ query: 'Pachliopta jophon' })).some((entry) => entry.scientificName === 'Atrophaneura jophon'), true);
  assert.equal(filterCatalog(species, filters({ query: '金裳凤蝶' })).some((entry) => entry.scientificName === 'Troides aeacus'), true);
});

test('protection filters use union semantics and combine with independent archive flags', () => {
  const citesI = filterCatalog(species, filters({ protection: new Set(['cites-I']) }));
  assert.equal(citesI.length, 3);

  const union = filterCatalog(species, filters({ protection: new Set(['cites-I', 'china-I']) }));
  assert.equal(union.length, 4);

  const chinaTroides = filterCatalog(species, filters({
    genus: 'Troides',
    protection: new Set(['china-II'])
  }));
  assert.equal(chinaTroides.length, 7);
  assert.ok(chinaTroides.every((entry) => entry.genus === 'Troides'));

  const taxonomyNotes = filterCatalog(species, filters({ taxonomyNote: true }));
  assert.equal(taxonomyNotes.length, 8);
  assert.ok(taxonomyNotes.every((entry) => entry.taxonomyNote));

  const protectedTaxonomyNotes = filterCatalog(species, filters({
    protection: new Set(['cites-II']),
    taxonomyNote: true
  }));
  assert.ok(protectedTaxonomyNotes.length > 0);
  assert.ok(protectedTaxonomyNotes.every((entry) => (
    entry.protectionLevel?.cites === 'II' && entry.taxonomyNote
  )));
});

test('taxonomy grouping preserves the source genus order', () => {
  const groups = groupSpecies(species, 'taxonomy');
  assert.equal(groups.length, 13);
  assert.equal(groups[0].key, 'Ornithoptera');
  assert.equal(groups[0].items.length, 14);
  assert.equal(groups.at(-1).key, 'Phengaris');
});

test('priority order surfaces appendix I and national level I records', () => {
  const sorted = filterCatalog(species, filters({ sort: 'priority' }));
  const topFive = sorted.slice(0, 5);
  assert.ok(topFive.every((entry) => riskScore(entry) > 90));
  assert.ok(topFive.some((entry) => entry.scientificName === 'Ornithoptera alexandrae'));
  assert.ok(topFive.some((entry) => entry.scientificName === 'Teinopalpus aureus'));
});
