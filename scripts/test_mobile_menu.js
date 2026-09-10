const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Take screenshot of mobile home
  await page.screenshot({ path: path.join(__dirname, 'mobile_home.png') });

  // Click hamburger button to open fullscreen mobile menu
  const menuButton = await page.$('button[aria-label="Open navigation menu"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(__dirname, 'mobile_menu_open.png') });
    console.log('Saved mobile_menu_open.png');

    // Click "Specialties" to test submenu
    const specialtiesBtn = await page.evaluateHandle(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      return btns.find(b => b.textContent.includes('Specialties'));
    });
    if (specialtiesBtn) {
      await specialtiesBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: path.join(__dirname, 'mobile_menu_submenu.png') });
      console.log('Saved mobile_menu_submenu.png');
    }
  } else {
    console.log('Menu button not found');
  }

  await browser.close();
})();
