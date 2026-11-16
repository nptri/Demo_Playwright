import { test } from '../../fixtures/sauceDemo.fixture';

test('Verify "title"', async ({ inventoryPage }) => {
  await inventoryPage.verifyTitle('Swag Labs');
});

test('Verify "More" bar', async ({ inventoryPage }) => {
  await inventoryPage.verifyMenuLinks();
});

test('Add to cart', async ({ inventoryPage }) => {
  await inventoryPage.addAllItemsToCart();
});

test('Verify "Sort button"', async ({ inventoryPage }) => {
  await inventoryPage.sortProductsBy('az');
  await inventoryPage.sortProductsBy('za');
  await inventoryPage.sortProductsBy('lohi');
  await inventoryPage.sortProductsBy('hilo');
});