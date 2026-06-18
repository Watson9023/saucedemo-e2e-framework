import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CartSelectors } from '../selectors/CartSelectors';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart/);
  }

  async expectProductVisible(productName: string): Promise<void> {
    await expect(this.page.locator(CartSelectors.itemName).filter({ hasText: productName })).toBeVisible();
  }

  async expectProductPrice(productPrice: string): Promise<void> {
    await expect(this.page.locator(CartSelectors.itemPrice).filter({ hasText: productPrice })).toBeVisible();
  }

  async continueToCheckout(): Promise<void> {
    await this.page.locator(CartSelectors.checkoutButton).click();
  }
}
