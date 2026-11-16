import { type Page } from '@playwright/test';

const SAUCE_DEMO_URL = 'https://www.saucedemo.com/';

const selectors = {
  usernameInput: 'input[placeholder="Username"]',
  passwordInput: 'input[placeholder="Password"]',
  loginButton: 'input[type="submit"]',
} as const;

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto(SAUCE_DEMO_URL);
  }

  async login(username = 'standard_user', password = 'secret_sauce') {
    await this.goto();
    await this.page.locator(selectors.usernameInput).fill(username);
    await this.page.locator(selectors.passwordInput).fill(password);
    await this.page.locator(selectors.loginButton).click();
  }
}
