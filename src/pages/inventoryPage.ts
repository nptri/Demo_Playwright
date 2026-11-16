import { expect, type Page } from '@playwright/test';

const selectors = {
  menuButton: '#react-burger-menu-btn',
  inventoryItems: '.inventory_item',
  shoppingCartBadge: '.shopping_cart_badge',
  sortSelect: 'select.product_sort_container',
  inventorySidebarLink: '#inventory_sidebar_link',
  aboutSidebarLink: '#about_sidebar_link',
  logoutSidebarLink: '#logout_sidebar_link',
  resetSidebarLink: '#reset_sidebar_link',
  dynamicCatalogSidebarLink: '#dynamic_catalog_sidebar_link',
  addToCartButtonRole: 'button',
} as const;

const menuLinkTexts = {
  inventory: 'All Items',
  about: 'About',
  logout: 'Logout',
  reset: 'Reset App State',
  dynamicCatalog: 'Dynamic Catalog',
} as const;

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async verifyTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyMenuLinks() {
    const menuButton = this.page.locator(selectors.menuButton);
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    await expect(this.page.locator(selectors.inventorySidebarLink)).toHaveText(menuLinkTexts.inventory);
    await expect(this.page.locator(selectors.aboutSidebarLink)).toHaveText(menuLinkTexts.about);
    await expect(this.page.locator(selectors.logoutSidebarLink)).toHaveText(menuLinkTexts.logout);
    await expect(this.page.locator(selectors.resetSidebarLink)).toHaveText(menuLinkTexts.reset);
    await expect(this.page.locator(selectors.dynamicCatalogSidebarLink)).toHaveText(menuLinkTexts.dynamicCatalog);
  }

  async addAllItemsToCart() {
    const inventoryItems = this.page.locator(selectors.inventoryItems);
    const shoppingCartBadge = this.page.locator(selectors.shoppingCartBadge);
    const totalItems = await inventoryItems.count();

    for (let index = 0; index < totalItems; index++) {
      await inventoryItems.nth(index).getByRole(selectors.addToCartButtonRole).click();
      await expect(shoppingCartBadge).toHaveText(String(index + 1));
    }
  }

  async sortProductsBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    const sortSelect = this.page.locator(selectors.sortSelect);
    await expect(sortSelect).toBeVisible();
    await sortSelect.selectOption(option);
  }
}
