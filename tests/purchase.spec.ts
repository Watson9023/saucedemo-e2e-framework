import { test } from '../fixtures/sauceFixture';
import { users } from '../test-data/users';
import { products } from '../test-data/products';
import { TestDataFactory } from '../utils/TestDataFactory';
import { Logger } from '../utils/Logger';

test.describe('@smoke @regression Purchase journey', () => {
  test('customer can complete a purchase for a selected product', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
  }) => {
    const customer = TestDataFactory.customer();

    Logger.step('Log in using a dedicated automation user');
    await loginPage.open();
    await loginPage.loginAs(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();

    Logger.step('Add product to cart and verify cart count');
    await inventoryPage.expectProductVisible(products.backpack.name);
    await inventoryPage.addProductToCart(products.backpack.id);
    await inventoryPage.expectCartCount('1');
    await inventoryPage.openCart();

    Logger.step('Verify cart contents and continue to checkout');
    await cartPage.expectLoaded();
    await cartPage.expectProductVisible(products.backpack.name);
    await cartPage.expectProductPrice(products.backpack.price);
    await cartPage.continueToCheckout();

    Logger.step('Enter checkout details and verify overview');
    await checkoutPage.enterCustomerDetails(customer);
    await checkoutPage.expectOverviewLoaded();

    Logger.step('Finish purchase and verify confirmation');
    await checkoutPage.finishPurchase();
    await checkoutPage.expectOrderConfirmation();
  });
});
