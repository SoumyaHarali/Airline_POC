const { test, expect } = require('@playwright/test');

test('Navigate to Qantas', async ({ page }) => {
  // Navigate to the Qantas website
  await page.goto('https://www.qantas.com/au/en.html');
  await page.screenshot({ path: 'screenshots/Quantaspage.png' });
});
