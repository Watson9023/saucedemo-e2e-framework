export const CartSelectors = {
  cartList: '[data-test="cart-list"]',
  cartItem: '[data-test="inventory-item"]',
  itemName: '[data-test="inventory-item-name"]',
  itemPrice: '[data-test="inventory-item-price"]',
  checkoutButton: '[data-test="checkout"]',
  continueShoppingButton: '[data-test="continue-shopping"]',
  removeButton: (productId: string) => `[data-test="remove-${productId}"]`
};
