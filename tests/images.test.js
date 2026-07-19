const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const { BUTTERFLY_DATA, getSpeciesEntries } = require('../data.js');

const IMAGES_DIR = path.join(__dirname, '..', 'images');
const SOF_MARKERS = new Set([
  0xc0, 0xc1, 0xc2, 0xc3,
  0xc5, 0xc6, 0xc7,
  0xc9, 0xca, 0xcb,
  0xcd, 0xce, 0xcf
]);

function getJpegDimensions(buffer) {
  assert.equal(buffer[0], 0xff, 'missing JPEG marker prefix');
  assert.equal(buffer[1], 0xd8, 'missing JPEG start-of-image marker');

  let offset = 2;
  while (offset + 3 < buffer.length) {
    while (buffer[offset] === 0xff) offset++;
    const marker = buffer[offset++];

    if (marker === 0xd9 || marker === 0xda) break;
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;

    const segmentLength = buffer.readUInt16BE(offset);
    assert.ok(segmentLength >= 2, `invalid JPEG segment length at byte ${offset}`);

    if (SOF_MARKERS.has(marker)) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5)
      };
    }

    offset += segmentLength;
  }

  throw new Error('JPEG dimensions not found');
}

test('every catalog species has one correctly named JPEG', () => {
  const expected = getSpeciesEntries(BUTTERFLY_DATA)
    .map((entry) => `${entry.scientificName}.jpg`)
    .sort();
  const actual = fs.readdirSync(IMAGES_DIR)
    .filter((filename) => filename.toLowerCase().endsWith('.jpg'))
    .sort();

  assert.equal(expected.length, 58);
  assert.deepEqual(actual, expected);
});

test('all catalog images are non-empty 1024x640 JPEG files', () => {
  for (const entry of getSpeciesEntries(BUTTERFLY_DATA)) {
    const filename = `${entry.scientificName}.jpg`;
    const imagePath = path.join(IMAGES_DIR, filename);
    const buffer = fs.readFileSync(imagePath);

    assert.ok(buffer.length > 10_000, `${filename} is unexpectedly small`);
    assert.deepEqual(getJpegDimensions(buffer), { width: 1024, height: 640 }, filename);
  }
});
