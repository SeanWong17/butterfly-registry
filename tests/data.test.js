const test = require('node:test');
const assert = require('node:assert/strict');

const {
  BUTTERFLY_DATA,
  calculateProtectionStatistics,
  getSpeciesEntries
} = require('../data.js');

const CHINA_LEVEL_I = ['Teinopalpus aureus'];
const CHINA_LEVEL_II = [
  'Bhutanitis lidderdalii',
  'Bhutanitis ludlowi',
  'Bhutanitis mansfieldi',
  'Bhutanitis nigrilima',
  'Bhutanitis pulchristriata',
  'Bhutanitis thaidina',
  'Bhutanitis yulongensis',
  'Losaria coon',
  'Luehdorfia chinensis',
  'Maculinea arionides',
  'Parnassius apollo',
  'Parnassius imperator',
  'Phengaris xiushani',
  'Sasakia funebris',
  'Sasakia pulcherrima',
  'Teinopalpus imperialis',
  'Troides aeacus',
  'Troides amphrysus',
  'Troides criton',
  'Troides cuneifera',
  'Troides haliphron',
  'Troides helena',
  'Troides magellanus'
].sort();

function findTaxon(node, scientificName) {
  if (node.scientificName === scientificName) return node;

  for (const child of node.children || []) {
    const match = findTaxon(child, scientificName);
    if (match) return match;
  }

  return null;
}

test('derived statistics match the audited catalog scope', () => {
  assert.deepEqual(calculateProtectionStatistics(BUTTERFLY_DATA), {
    totalEntries: 58,
    totalProtectedSpecies: 58,
    citesI: 3,
    citesII: 48,
    chinaLevelI: 1,
    chinaLevelII: 23
  });
  assert.deepEqual(BUTTERFLY_DATA.statistics, calculateProtectionStatistics(BUTTERFLY_DATA));
});

test('China protection levels match the 2021 national list', () => {
  const species = getSpeciesEntries(BUTTERFLY_DATA);
  const levelI = species
    .filter((entry) => entry.protectionLevel?.chinaLevel === 'I')
    .map((entry) => entry.scientificName)
    .sort();
  const levelII = species
    .filter((entry) => entry.protectionLevel?.chinaLevel === 'II')
    .map((entry) => entry.scientificName)
    .sort();

  assert.deepEqual(levelI, CHINA_LEVEL_I);
  assert.deepEqual(levelII, CHINA_LEVEL_II);
});

test('CITES appendix assignments match the audited taxon coverage', () => {
  const species = getSpeciesEntries(BUTTERFLY_DATA);
  const appendixI = species
    .filter((entry) => entry.protectionLevel?.cites === 'I')
    .map((entry) => entry.scientificName)
    .sort();
  const appendixII = species
    .filter((entry) => entry.protectionLevel?.cites === 'II')
    .map((entry) => entry.scientificName)
    .sort();
  const appendixIExpected = [
    'Ornithoptera alexandrae',
    'Papilio chikae',
    'Papilio homerus'
  ].sort();
  const appendixIINames = new Set([
    'Atrophaneura jophon',
    'Atrophaneura pandiyana',
    'Parnassius apollo'
  ]);
  const appendixIIGenera = new Set([
    'Bhutanitis',
    'Ornithoptera',
    'Teinopalpus',
    'Trogonoptera',
    'Troides'
  ]);
  const appendixIIExpected = species
    .map((entry) => entry.scientificName)
    .filter((name) => {
      if (name === 'Ornithoptera alexandrae') return false;
      return appendixIINames.has(name) || appendixIIGenera.has(name.split(' ')[0]);
    })
    .sort();

  assert.deepEqual(appendixI, appendixIExpected);
  assert.deepEqual(appendixII, appendixIIExpected);
  assert.equal(appendixII.length, 48);
});

test('species identifiers and scientific names are unique', () => {
  const species = getSpeciesEntries(BUTTERFLY_DATA);
  assert.equal(new Set(species.map((entry) => entry.id)).size, species.length);
  assert.equal(new Set(species.map((entry) => entry.scientificName)).size, species.length);
  assert.equal(
    species.filter((entry) => !entry.protectionLevel?.cites && !entry.protectionLevel?.chinaLevel).length,
    0
  );
});

test('classification node counts are derived from descendants', () => {
  function countSpecies(node) {
    if (node.rank === 'species') return 1;
    const count = (node.children || []).reduce((total, child) => total + countSpecies(child), 0);
    assert.equal(node.protectedSpeciesCount, count, node.scientificName);
    return count;
  }

  assert.equal(countSpecies(BUTTERFLY_DATA), 58);
});

test('Zerynthiini is classified under Parnassiinae', () => {
  const papilioninae = findTaxon(BUTTERFLY_DATA, 'Papilioninae');
  const parnassiinae = findTaxon(BUTTERFLY_DATA, 'Parnassiinae');

  assert.ok(papilioninae);
  assert.ok(parnassiinae);
  assert.equal(papilioninae.protectedSpeciesCount, 44);
  assert.equal(parnassiinae.protectedSpeciesCount, 10);
  assert.equal(findTaxon(papilioninae, 'Zerynthiini'), null);
  assert.equal(findTaxon(parnassiinae, 'Zerynthiini')?.scientificName, 'Zerynthiini');
});

test('audited IUCN statuses and scientific-name authorships are retained', () => {
  const byName = new Map(
    getSpeciesEntries(BUTTERFLY_DATA).map((entry) => [entry.scientificName, entry])
  );
  const statuses = {
    'Ornithoptera meridionalis': 'NT（近危）',
    'Ornithoptera tithonus': 'LC（无危）',
    'Atrophaneura jophon': 'EN（濒危）',
    'Papilio chikae': 'EN（濒危）'
  };
  const authors = {
    'Ornithoptera alexandrae': '(Rothschild, 1907)',
    'Ornithoptera croesus': 'Wallace, 1859',
    'Ornithoptera euphorion': '(Gray, 1853)',
    'Ornithoptera richmondia': '(Gray, 1853)',
    'Ornithoptera goliath': 'Oberthür, 1888',
    'Ornithoptera paradisea': 'Staudinger, 1893',
    'Ornithoptera tithonus': 'de Haan, 1840',
    'Ornithoptera rothschildi': 'Kenrick, 1911',
    'Troides darsius': '(Gray, 1853)',
    'Troides plato': 'Wallace, 1865'
  };

  for (const [name, status] of Object.entries(statuses)) {
    assert.equal(byName.get(name)?.iucnStatus, status, name);
  }
  for (const [name, author] of Object.entries(authors)) {
    assert.equal(byName.get(name)?.author, author, name);
  }
});

test('audited range corrections are retained', () => {
  const byName = new Map(
    getSpeciesEntries(BUTTERFLY_DATA).map((entry) => [entry.scientificName, entry])
  );

  assert.match(byName.get('Teinopalpus aureus').distribution, /越南/);
  assert.match(byName.get('Teinopalpus aureus').distribution, /老挝/);
  assert.match(byName.get('Teinopalpus imperialis').distribution, /越南北部/);
  assert.equal(byName.get('Bhutanitis ludlowi').distribution, '不丹、印度阿鲁纳恰尔邦');
  assert.doesNotMatch(byName.get('Bhutanitis ludlowi').distribution, /中国/);
  assert.match(byName.get('Ornithoptera victoriae').distribution, /所罗门群岛/);
  assert.match(byName.get('Ornithoptera victoriae').distribution, /布干维尔岛/);
});

test('CITES genus-level coverage keeps its taxonomy basis', () => {
  const byName = new Map(
    getSpeciesEntries(BUTTERFLY_DATA).map((entry) => [entry.scientificName, entry])
  );

  for (const name of [
    'Bhutanitis nigrilima',
    'Bhutanitis pulchristriata',
    'Bhutanitis yulongensis'
  ]) {
    const entry = byName.get(name);
    assert.equal(entry.protectionLevel.cites, 'II');
    assert.match(entry.citesBasis, /Bhutanitis spp\./);
    assert.ok(entry.taxonomyNote);
  }

  const arfakensis = byName.get('Ornithoptera arfakensis');
  assert.match(arfakensis.citesBasis, /Ornithoptera spp\./);
  assert.match(arfakensis.taxonomyNote, /GBIF Backbone.*尚无对应物种匹配/);
});

test('audited distribution, morphology, and taxonomy facts are retained', () => {
  const byName = new Map(
    getSpeciesEntries(BUTTERFLY_DATA).map((entry) => [entry.scientificName, entry])
  );

  assert.match(byName.get('Troides dohertyi').distribution, /塔劳群岛/);
  assert.match(byName.get('Troides staudingeri').distribution, /马鲁古南部/);
  assert.match(byName.get('Troides vandepolli').distribution, /苏门答腊岛、爪哇岛/);
  assert.match(byName.get('Troides cuneifera').description, /1200-2000米.*山地森林/);
  assert.match(byName.get('Troides miranda').description, /前翅.*局部蓝色鳞光/);
  assert.match(byName.get('Troides haliphron').description, /金黄色斑组成的窄带/);
  assert.match(byName.get('Papilio chikae').description, /宽阔的蓝绿色金属带/);
  assert.match(byName.get('Sasakia funebris').description, /蓝黑至蓝紫色鳞光/);
  assert.match(byName.get('Phengaris xiushani').description, /模式产地记录为云南怒江/);
  assert.match(byName.get('Sasakia pulcherrima').taxonomyNote, /BACKBONE_MATCH_NONE/);
  assert.match(byName.get('Atrophaneura jophon').taxonomyNote, /Pachliopta jophon/);
  assert.match(byName.get('Atrophaneura pandiyana').taxonomyNote, /Pachliopta pandiyana/);
});

test('all known GBIF name-match exceptions carry an explicit taxonomy note', () => {
  const byName = new Map(
    getSpeciesEntries(BUTTERFLY_DATA).map((entry) => [entry.scientificName, entry])
  );
  const exceptions = [
    'Ornithoptera arfakensis',
    'Atrophaneura jophon',
    'Atrophaneura pandiyana',
    'Bhutanitis yulongensis',
    'Bhutanitis nigrilima',
    'Sasakia pulcherrima',
    'Maculinea arionides'
  ];

  for (const name of exceptions) {
    assert.ok(byName.get(name).taxonomyNote, name);
  }
});
