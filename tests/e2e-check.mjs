import assert from "node:assert/strict";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:4173";
const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];
const browser = await chromium.launch({ headless: true });
const results = [];

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
    page.on("requestfailed", (request) => errors.push(`request: ${request.url()}`));

    await page.goto(baseUrl, { waitUntil: "networkidle" });
    assert.equal(await page.locator(".specimen-drawer").count(), 58);
    assert.equal(await page.locator(".specimen-drawer img[src^='thumbnails/']").count(), 58);
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
      false,
    );

    assert.equal(await page.locator('input[name="taxonomy-note"]').count(), 0);
    assert.equal(await page.locator('legend[data-i18n="archiveFlags"]').count(), 0);

    await setCheckbox(page, 'input[name="protection"][value="cites-II"]');
    assert.equal(await page.locator("#result-index").textContent(), "048");
    await page.locator("#reset-filters").evaluate((button) => button.click());

    const firstRecord = page.locator(".specimen-drawer").first();
    const firstId = await firstRecord.getAttribute("data-open");
    await firstRecord.focus();
    await firstRecord.press("Enter");
    assert.equal(await page.locator("#detail-panel").getAttribute("aria-hidden"), "false");
    assert.match(await page.locator("#detail-content img").getAttribute("src"), /^images\//);
    if (viewport.name === "mobile") assert.equal(await page.evaluate(() => document.activeElement?.id), "close-detail");

    await page.locator(".detail-image-button").click();
    assert.equal(await page.locator("#image-viewer").getAttribute("open"), "");
    assert.match(await page.locator("#image-viewer-image").getAttribute("src"), /^images\//);
    await page.locator("#image-viewer-image").waitFor({ state: "visible" });
    const initialImageWidth = await page.locator("#image-viewer-image").evaluate((image) => image.getBoundingClientRect().width);
    await page.locator("#image-zoom-in").click();
    const zoomedImageWidth = await page.locator("#image-viewer-image").evaluate((image) => image.getBoundingClientRect().width);
    assert.ok(zoomedImageWidth > initialImageWidth);
    assert.equal(await page.locator("#image-zoom-level").textContent(), "125%");
    await page.locator("#image-zoom-reset").click();
    assert.equal(await page.locator("#image-zoom-level").textContent(), "100%");
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#image-viewer").getAttribute("open"), null);

    await page.locator(".detail-image-button").click();
    await page.locator("#image-viewer-image").waitFor({ state: "visible" });
    await page.locator("#close-image-viewer").click();
    assert.equal(await page.locator("#image-viewer").getAttribute("open"), null);

    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#detail-panel").getAttribute("aria-hidden"), "true");
    assert.equal(await page.locator("#detail-panel").getAttribute("inert"), "");
    assert.equal(await page.evaluate(() => document.activeElement?.dataset.open), firstId);

    await page.locator('[data-view="audit"]').click();
    assert.equal(await page.locator("#audit-body tr").count(), 58);
    await page.locator("#audit-note-toggle").click();
    assert.equal(await page.locator("#audit-note-toggle").getAttribute("aria-pressed"), "true");
    assert.equal(await page.locator("#audit-body tr").count(), 8);
    await page.locator("#language-toggle").click();
    assert.equal(await page.locator('[data-i18n="auditTaxonomyOnly"]').textContent(), "Review needed only");
    assert.equal(await page.evaluate(() => document.documentElement.lang), "en");
    await page.locator("#audit-note-toggle").click();
    assert.equal(await page.locator("#audit-body tr").count(), 58);
    assert.deepEqual(errors, []);

    results.push({ viewport: viewport.name, auditNotes: 8, zoomedImageWidth, errors: errors.length });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(results, null, 2));

async function setCheckbox(page, selector) {
  await page.locator(selector).evaluate((input) => {
    input.checked = true;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
}
