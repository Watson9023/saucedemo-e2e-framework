export const InventorySelectors = {
  inventoryContainer: '[data-test="inventory-container"]',
  inventoryList: '[data-test="inventory-list"]',
  inventoryItems: '[data-test="inventory-item"]',
  pageTitle: '[data-test="title"]',
  cartLink: '[data-test="shopping-cart-link"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
  sortDropdown: '[data-test="product-sort-container"]',
  productName: '[data-test="inventory-item-name"]',
  productPrice: '[data-test="inventory-item-price"]',
  addToCartButton: (productId: string) => `[data-test="add-to-cart-${productId}"]`,
  removeButton: (productId: string) => `[data-test="remove-${productId}"]`
};
