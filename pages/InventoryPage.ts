import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InventorySelectors } from '../selectors/InventorySelectors';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator(InventorySelectors.pageTitle)).toHaveText('Products');
    await expect(this.page.locator(InventorySelectors.inventoryContainer)).toBeVisible();
  }

  async addProductToCart(productId: string): Promise<void> {
    await this.page.locator(InventorySelectors.addToCartButton(productId)).click();
  }

  async expectProductVisible(productName: string): Promise<void> {
    await expect(this.page.locator(InventorySelectors.productName).filter({ hasText: productName })).toBeVisible();
  }

  async expectCartCount(count: string): Promise<void> {
    await expect(this.page.locator(InventorySelectors.cartBadge)).toHaveText(count);
  }

  async openCart(): Promise<void> {
    await this.page.locator(InventorySelectors.cartLink).click();
  }
}
