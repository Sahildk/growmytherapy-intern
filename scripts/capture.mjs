import puppeteer from 'puppeteer';
import path from 'path';

const outDir = 'C:\\Users\\sahil\\.gemini\\antigravity\\brain\\2f16b41d-5236-4dd8-b834-3da915a237e2\\scratch';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Desktop captures
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await page.evaluateHandle('document.fonts.ready');

    // Smooth scroll down to load any lazy images, then scroll back up
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const interval = setInterval(() => {
          window.scrollBy(0, 500);
          y += 500;
          if (y >= document.body.scrollHeight) {
            clearInterval(interval);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 120);
      });
    });

    await new Promise(r => setTimeout(r, 2000));

    // Full page desktop
    await page.screenshot({ path: path.join(outDir, 'preview_desktop.jpg'), fullPage: true, type: 'jpeg', quality: 90 });
    console.log('Saved preview_desktop.jpg');

    // Hero viewport
    await page.screenshot({ path: path.join(outDir, 'preview_hero_desktop.jpg'), clip: { x: 0, y: 0, width: 1920, height: 920 }, type: 'jpeg', quality: 90 });
    console.log('Saved preview_hero_desktop.jpg');

    // Contact button element screenshot
    const contactBtn = await page.$('a[href="#contact"]');
    if (contactBtn) {
      await contactBtn.screenshot({ path: path.join(outDir, 'preview_contact_btn.png') });
      console.log('Saved preview_contact_btn.png');
    }

    // Scroll down 700px to prove navbar is NOT sticky
    await page.evaluate(() => window.scrollTo(0, 700));
    await new Promise(r => setTimeout(r, 500));
    const headerTop = await page.evaluate(() => document.querySelector('header').getBoundingClientRect().top);
    console.log(`Header top after 700px scroll: ${headerTop}px (negative means scrolled off!)`);
    await page.screenshot({ path: path.join(outDir, 'preview_scroll_desktop.jpg'), type: 'jpeg', quality: 85 });
    console.log('Saved preview_scroll_desktop.jpg (showing no sticky navbar)');

    await page.close();
  }

  // 2. Tablet & Mobile viewports
  const viewports = [
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await page.evaluateHandle('document.fonts.ready');
    
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const interval = setInterval(() => {
          window.scrollBy(0, 500);
          y += 500;
          if (y >= document.body.scrollHeight) {
            clearInterval(interval);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 120);
      });
    });

    await new Promise(r => setTimeout(r, 2000));

    const screenshotPath = path.join(outDir, `preview_${vp.name}.jpg`);
    await page.screenshot({ path: screenshotPath, fullPage: true, type: 'jpeg', quality: 85 });
    console.log(`Saved ${vp.name} preview to ${screenshotPath}`);
    await page.close();
  }

  await browser.close();
  console.log('All viewports and details captured successfully!');
}

run().catch(console.error);
