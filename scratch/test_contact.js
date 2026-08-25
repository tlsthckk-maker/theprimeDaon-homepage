const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to https://primedaon.com/ko/contact...');
  await page.goto('https://primedaon.com/ko/contact');
  
  console.log('Filling out form...');
  await page.fill('input[name="reply_to"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message from automated script.');
  await page.check('#privacy');
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  page.on('response', async (response) => {
    if (response.url().includes('emailjs')) {
      console.log('EmailJS response status:', response.status(), response.statusText());
      try {
        const text = await response.text();
        console.log('EmailJS response body:', text);
      } catch (e) {
        console.log('Could not read body');
      }
    }
  });

  console.log('Clicking submit...');
  const isFormValid = await page.evaluate(() => document.querySelector('form').checkValidity());
  console.log('Is form valid before submit?', isFormValid);
  
  await page.click('button[type="submit"]');
  
  console.log('Waiting for network/UI updates...');
  await page.waitForTimeout(3000);
  
  const successCount = await page.locator('.bg-green-50').count();
  const errorCount = await page.locator('.bg-red-50').count();
  console.log('Success messages on page:', successCount);
  console.log('Error messages on page:', errorCount);
  
  await browser.close();
})();
