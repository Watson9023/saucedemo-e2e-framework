import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginSelectors } from '../selectors/LoginSelectors';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.goto('/');
  }

  async loginAs(username: string, password: string): Promise<void> {
    await this.page.locator(LoginSelectors.usernameInput).fill(username);
    await this.page.locator(LoginSelectors.passwordInput).fill(password);
    await this.page.locator(LoginSelectors.loginButton).click();
  }

  async expectLoginError(messagePart: string): Promise<void> {
    await expect(this.page.locator(LoginSelectors.errorMessage)).toContainText(messagePart);
  }
}
