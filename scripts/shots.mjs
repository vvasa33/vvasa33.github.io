import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = process.env.BASE || 'http://localhost:5173';
const OUT = process.env.OUT || 'screenshots';

const viewports = [
  { name: '320', width: 320, height: 720 },
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

const routes = [
  { name: 'home', path: '/' },
  { name: 'blogs', path: '/blogs' },
  { name: 'blogpost', path: '/blog/to-start-a-startup' },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  for (const route of routes) {
    const url = BASE + route.path;
    await page.goto(url, { waitUntil: 'networkidle' });
    // allow framer-motion in-view animations to settle
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    const file = `${OUT}/${route.name}-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    // capture horizontal overflow info
    const overflow = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const offenders = [];
      if (docW > winW + 1) {
        document.querySelectorAll('*').forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.right > winW + 1 || r.left < -1) {
            offenders.push({
              tag: el.tagName,
              cls: (el.className && el.className.toString().slice(0, 80)) || '',
              right: Math.round(r.right),
              left: Math.round(r.left),
            });
          }
        });
      }
      return { docW, winW, overflow: docW > winW + 1, offenders: offenders.slice(0, 12) };
    });
    console.log(`${route.name} @ ${vp.name}: docW=${overflow.docW} winW=${overflow.winW} overflow=${overflow.overflow}`);
    if (overflow.overflow) {
      for (const o of overflow.offenders) {
        console.log(`   OVERFLOW <${o.tag}> right=${o.right} left=${o.left} cls="${o.cls}"`);
      }
    }
  }
  await context.close();
}
await browser.close();
console.log('DONE');
