import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CheckoutSelectors } from '../selectors/CheckoutSelectors';
import { CustomerDetails } from '../utils/TestDataFactory';

export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async enterCustomerDetails(customer: CustomerDetails): Promise<void> {
    await this.page.locator(CheckoutSelectors.firstNameInput).fill(customer.firstName);
    await this.page.locator(CheckoutSelectors.lastNameInput).fill(customer.lastName);
    await this.page.locator(CheckoutSelectors.postalCodeInput).fill(customer.postalCode);
    await this.page.locator(CheckoutSelectors.continueButton).click();
  }

  async expectOverviewLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-two/);
    await expect(this.page.locator(CheckoutSelectors.summaryInfo)).toBeVisible();
    await expect(this.page.locator(CheckoutSelectors.summaryTotal)).toBeVisible();
  }

  async finishPurchase(): Promise<void> {
    await this.page.locator(CheckoutSelectors.finishButton).click();
  }

  async expectOrderConfirmation(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.page.locator(CheckoutSelectors.completeHeader)).toHaveText('Thank you for your order!');
    await expect(this.page.locator(CheckoutSelectors.completeText)).toBeVisible();
  }

  async expectCheckoutError(messagePart: string): Promise<void> {
    await expect(this.page.locator(CheckoutSelectors.errorMessage)).toContainText(messagePart);
  }
}
