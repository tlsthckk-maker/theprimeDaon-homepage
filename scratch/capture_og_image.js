const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 } // Standard Open Graph image resolution
  });
  
  console.log('Navigating to http://localhost:3000/ko...');
  await page.goto('http://localhost:3000/ko');
  
  // Wait for 3 seconds to let videos and animations settle
  console.log('Waiting for animations to settle...');
  await page.waitForTimeout(3000);
  
  console.log('Capturing screenshot...');
  await page.screenshot({ path: 'public/thumbnail.jpg', quality: 85, type: 'jpeg' });
  
  await browser.close();
  console.log('Screenshot saved to public/thumbnail.jpg');
})();
