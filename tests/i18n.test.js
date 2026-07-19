const test = require('node:test');
const assert = require('node:assert/strict');

const { BUTTERFLY_DATA, getSpeciesEntries } = require('../data.js');
const { flattenCatalog } = require('../catalog.js');
const { SOURCE_TEXT, SPECIES, TAXA, UI, translate } = require('../i18n.js');

const species = getSpeciesEntries(BUTTERFLY_DATA);

test('Chinese and English UI dictionaries expose the same keys', () => {
  assert.deepEqual(Object.keys(UI.en).sort(), Object.keys(UI.zh).sort());
  assert.equal(translate('en', 'showing', { visible: 7, total: 58 }), 'Showing 7 of 58');
  assert.equal(translate('zh', 'showing', { visible: 7, total: 58 }), '显示 7 / 58');
});

test('all 58 species have complete English archive text', () => {
  assert.equal(Object.keys(SPECIES).length, species.length);

  for (const entry of species) {
    const localized = SPECIES[entry.scientificName];
    assert.ok(localized, entry.scientificName);
    for (const field of ['name', 'range', 'profile', 'note']) {
      assert.ok(localized[field]?.trim(), `${entry.scientificName}: ${field}`);
    }
    if (entry.taxonomyNote) assert.ok(localized.taxonomy?.trim(), `${entry.scientificName}: taxonomy`);
    if (entry.citesBasis) assert.ok(localized.citesBasis?.trim(), `${entry.scientificName}: citesBasis`);
  }
});

test('families and genera used by the catalog have English labels', () => {
  const taxa = new Set(flattenCatalog(BUTTERFLY_DATA).flatMap((entry) => [entry.family, entry.genus]));
  for (const scientificName of taxa) {
    assert.ok(TAXA[scientificName], scientificName);
  }
});

test('both languages document all five non-image data sources', () => {
  assert.equal(SOURCE_TEXT.zh.length, 5);
  assert.equal(SOURCE_TEXT.en.length, 5);
  for (const language of ['zh', 'en']) {
    for (const source of SOURCE_TEXT[language]) {
      assert.ok(source.name.trim());
      assert.ok(source.scope.trim());
    }
  }
});

test('species records retain a neutral natural-history archive tone', () => {
  const chinesePromotionalOrConversational = /讨论|争议|质疑|不能|不应|富可敌国|绝世|激动|收藏市场|收藏界|明星物种|最优雅|最具观赏|优美尾突|奇美拉怪兽/;
  const englishPromotionalOrConversational = /\b(?:spectacular|graceful|flagship|controversial|debated|must not|cannot)\b/i;

  for (const entry of species) {
    const chineseText = [entry.description, entry.remarks, entry.taxonomyNote].filter(Boolean).join(' ');
    const english = SPECIES[entry.scientificName];
    const englishText = [english.profile, english.note, english.taxonomy].filter(Boolean).join(' ');
    assert.doesNotMatch(chineseText, chinesePromotionalOrConversational, entry.scientificName);
    assert.doesNotMatch(englishText, englishPromotionalOrConversational, entry.scientificName);
  }
});
