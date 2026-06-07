import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = process.env.BASE || 'http://localhost:5173';
const OUT = process.env.OUT || 'frames';

// CLI args: node frames.mjs <route> <label> <width> <height>
const route = process.argv[2] || '/';
const label = process.argv[3] || 'home';
const width = parseInt(process.argv[4] || '375', 10);
const height = parseInt(process.argv[5] || '812', 10);

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: 2,
});
const page = await context.newPage();
await page.goto(BASE + route, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
// scroll to bottom to trigger in-view animations, then back up
const total = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < total; y += Math.floor(height * 0.9)) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(250);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);

let i = 0;
for (let y = 0; y < total; y += height) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(200);
  await page.screenshot({ path: `${OUT}/${label}-${width}-f${String(i).padStart(2, '0')}.png` });
  i++;
}
await browser.close();
console.log(`frames=${i} total=${total}`);
