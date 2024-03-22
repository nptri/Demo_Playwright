import { test, expect, Browser, Page } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
test('gmail', async () => {
  const browser: Browser = await firefox.launch({headless: false});
  const page: Page = await browser.newPage();
  const screenshotPath: string = "/Users/ts-nguyenphuc.tri/Desktop/project/Demo_Playwright/screenshot/capture.png";

  await page.goto('https://gmail.com/');
  await expect(page).toHaveTitle("Gmail");

  const inputUsername = await page.locator("[aria-label='Email or phone']");

  await inputUsername.click();
  await inputUsername.fill("phuctri1510@gmail.com");
  await page.screenshot({path: screenshotPath});
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
