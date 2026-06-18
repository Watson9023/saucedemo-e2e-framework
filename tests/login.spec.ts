import { test } from '../fixtures/sauceFixture';
import { users } from '../test-data/users';

test.describe('@smoke @regression Login validation', () => {
  test('standard user can log in successfully', async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.loginAs(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('invalid login shows the expected error', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginAs(users.invalid.username, users.invalid.password);
    await loginPage.expectLoginError('Username and password do not match');
  });

  test('locked out user shows the expected error', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginAs(users.lockedOut.username, users.lockedOut.password);
    await loginPage.expectLoginError('Sorry, this user has been locked out');
  });
});
