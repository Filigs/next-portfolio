const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 595, height: 842, deviceScaleFactor: 2 });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });

  // Wait for the styles to be loaded
  await page.waitForSelector("link[rel=stylesheet]");

  // Add this line if you want to see the page content in the terminal
  // console.log(await page.content());

  await page.emulateMediaType("print");
  await page.pdf({ path: "resume.pdf", format: "A4", printBackground: true });

  await browser.close();
})();
