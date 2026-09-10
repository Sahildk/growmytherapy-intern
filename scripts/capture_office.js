const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 30000 });

  const officeEl = await page.$('#office');
  if (officeEl) {
    await officeEl.screenshot({ path: 'scripts/office_section.png' });
    console.log('Saved office_section.png');
  }

  await browser.close();
})();
