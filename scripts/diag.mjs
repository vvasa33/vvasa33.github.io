import { chromium } from 'playwright';

const BASE = 'http://localhost:5173';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const page = await ctx.newPage();
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
const total = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < total; y += 120) { await page.evaluate(yy => window.scrollTo(0, yy), y); await page.waitForTimeout(60); }
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1200);

const info = await page.evaluate(() => {
  const root = document.querySelector('.max-w-\\[1440px\\]');
  const kids = root ? Array.from(root.children) : [];
  const report = kids.map((el, i) => {
    const cs = getComputedStyle(el);
    return {
      i, tag: el.tagName, opacity: cs.opacity,
      cls: (el.className || '').toString().slice(0, 40),
    };
  });
  const f = document.querySelector('footer');
  const fr = f && f.getBoundingClientRect();
  return {
    kids: report,
    footer: f ? { opacity: getComputedStyle(f).opacity, top: Math.round(fr.top), bottom: Math.round(fr.bottom) } : null,
    scrollY: Math.round(window.scrollY), innerH: window.innerHeight, scrollH: document.body.scrollHeight,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
