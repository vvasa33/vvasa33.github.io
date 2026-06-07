import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:5173';
const OUT = 'frames';
mkdirSync(OUT, { recursive: true });

const route = process.argv[2] || '/';
const label = process.argv[3] || 'home';
const widths = (process.argv[4] || '320,375,768,1440').split(',').map(Number);
const where = process.argv[5] || 'top'; // top | bottom

const browser = await chromium.launch();
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  if (where === 'bottom') {
    // trigger in-view by stepping down
    const total = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < total; y += 700) { await page.evaluate(yy => window.scrollTo(0, yy), y); await page.waitForTimeout(150); }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: `${OUT}/${label}-${where}-${w}.png` });
  await ctx.close();
}
await browser.close();
console.log('SPOT DONE');
