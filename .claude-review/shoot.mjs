import { chromium } from "playwright";
import fs from "fs";

const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["service-nri-taxation", "/services/nri-taxation"],
  ["service-virtual-cfo", "/services/virtual-cfo"],
  ["pricing", "/pricing"],
  ["resources", "/resources"],
  ["blog-nri-itr", "/resources/nri-itr-filing-guide"],
  ["faq", "/resources/faq"],
  ["tax-calendar", "/resources/tax-calendar"],
  ["contact", "/contact"],
  ["privacy", "/privacy-policy"],
  ["terms", "/terms-of-service"],
];

const outDir = ".claude-review/shots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const errors = {};

for (const [vpName, vp] of [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
]) {
  const ctx = await browser.newContext({ viewport: vp });
  const page = await ctx.newPage();
  for (const [name, path] of routes) {
    const key = `${name}-${vpName}`;
    errors[key] = [];
    page.removeAllListeners("console");
    page.removeAllListeners("pageerror");
    page.on("console", (m) => m.type() === "error" && errors[key].push(m.text().slice(0, 200)));
    page.on("pageerror", (e) => errors[key].push(String(e).slice(0, 200)));
    try {
      const resp = await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle", timeout: 30000 });
      errors[key].unshift(`HTTP ${resp?.status()}`);
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${outDir}/${key}.png`, fullPage: true });
      console.log(`OK ${key}`);
    } catch (e) {
      console.log(`FAIL ${key}: ${e.message.slice(0, 120)}`);
    }
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync(`${outDir}/console-errors.json`, JSON.stringify(errors, null, 2));
console.log("done");
