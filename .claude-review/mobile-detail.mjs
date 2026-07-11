import { chromium } from "playwright";

const out = ".claude-review/shots";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.screenshot({ path: `${out}/m-home-hero.png` });

// open mobile menu
const burger = page.locator('button[aria-label="Toggle menu"]');
await burger.click();
await page.waitForTimeout(600);
await page.screenshot({ path: `${out}/m-menu-open.png` });

await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
await page.screenshot({ path: `${out}/m-contact-top.png` });

await page.goto("http://localhost:3000/pricing", { waitUntil: "networkidle" });
await page.screenshot({ path: `${out}/m-pricing-top.png` });

await page.goto("http://localhost:3000/resources/tax-calendar", { waitUntil: "networkidle" });
await page.mouse.wheel(0, 900);
await page.waitForTimeout(400);
await page.screenshot({ path: `${out}/m-taxcal-table.png` });

await browser.close();
console.log("done");
