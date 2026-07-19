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

    const flagGrouping = await page.locator('input[name="taxonomy-note"]').evaluate((input) => ({
      legend: input.closest("fieldset")?.querySelector("legend")?.dataset.i18n,
      insideProtection: Boolean(input.closest("fieldset")?.querySelector('input[name="protection"]')),
    }));
    assert.deepEqual(flagGrouping, { legend: "archiveFlags", insideProtection: false });

    await setCheckbox(page, 'input[name="taxonomy-note"]');
    assert.equal(await page.locator("#result-index").textContent(), "008");
    await setCheckbox(page, 'input[name="protection"][value="cites-II"]');
    const combinedCount = Number(await page.locator("#result-index").textContent());
    assert.ok(combinedCount > 0 && combinedCount < 8);
    await page.locator("#reset-filters").evaluate((button) => button.click());

    const firstRecord = page.locator(".specimen-drawer").first();
    const firstId = await firstRecord.getAttribute("data-open");
    await firstRecord.focus();
    await firstRecord.press("Enter");
    assert.equal(await page.locator("#detail-panel").getAttribute("aria-hidden"), "false");
    assert.match(await page.locator("#detail-content img").getAttribute("src"), /^images\//);
    if (viewport.name === "mobile") assert.equal(await page.evaluate(() => document.activeElement?.id), "close-detail");
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#detail-panel").getAttribute("aria-hidden"), "true");
    assert.equal(await page.locator("#detail-panel").getAttribute("inert"), "");
    assert.equal(await page.evaluate(() => document.activeElement?.dataset.open), firstId);

    await page.locator('[data-view="audit"]').click();
    assert.equal(await page.locator("#audit-body tr").count(), 58);
    await page.locator("#language-toggle").click();
    assert.equal(await page.locator('legend[data-i18n="archiveFlags"]').textContent(), "Archive flags");
    assert.equal(await page.evaluate(() => document.documentElement.lang), "en");
    assert.deepEqual(errors, []);

    results.push({ viewport: viewport.name, combinedCount, errors: errors.length });
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
