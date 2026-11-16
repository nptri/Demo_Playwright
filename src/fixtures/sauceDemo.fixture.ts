import { test as base, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

type SauceDemoFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<SauceDemoFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await use(new InventoryPage(page));
  },
});

export { expect };
