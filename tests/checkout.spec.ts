import { test } from '../fixtures/sauceFixture';
import { users } from '../test-data/users';
import { products } from '../test-data/products';

test.describe('@regression Checkout validation', () => {
  test('checkout requires customer first name', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
  }) => {
    await loginPage.open();
    await loginPage.loginAs(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();

    await inventoryPage.addProductToCart(products.bikeLight.id);
    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectProductVisible(products.bikeLight.name);
    await cartPage.continueToCheckout();

    await checkoutPage.enterCustomerDetails({
      firstName: '',
      lastName: 'Engineer',
      postalCode: '2000'
    });

    await checkoutPage.expectCheckoutError('First Name is required');
  });
});
