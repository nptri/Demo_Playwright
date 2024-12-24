import {test, expect, Browser, Page} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright';

//before each test
test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator(`xpath=//input[@placeholder='Username']`).fill("standard_user")
    await page.locator(`xpath=//input[@placeholder='Password']`).fill("secret_sauce")
    await page.locator(`xpath=//input[@type='submit']`).click()
})

//basic test structure - await important that will need for promise to be returned
test('Verify "title"', async ({page}) => {
    await expect(page).toHaveTitle('Swag Labs');
})

test('Verify "More" bar', async ({page}) => {
    
    await expect(page.locator(`xpath=//button[@id='react-burger-menu-btn']`)).toBeVisible;
    await page.locator(`xpath=//button[@id='react-burger-menu-btn']`).click;

    expect(page.locator(`#inventory_sidebar_link`)) //select by CSS
                .toHaveText('All Items')

    expect(page.locator(`#about_sidebar_link`))
                .toHaveText('About')

    expect(page.locator(`#logout_sidebar_link`))
                .toHaveText('Logout')

    expect(page.locator(`#reset_sidebar_link`))
                .toHaveText('Reset App State')
})

test('Add to cart', async ({page}) => {
    let totalElement = await page.locator(".inventory_item").count() //convert Promise<number> to number
    var index: number;
    for(index = 0; index < totalElement; index ++){
        await page.locator(".inventory_item")
                  .nth(index)
                  .getByRole("button").click()
        var indexText = index + 1
        await expect(page.locator(".shopping_cart_badge"))
                  .toHaveText(indexText.toString())
    }
})

test('Verify "Sort button"', async ({page}) => {
    const optionBox = page.locator(`xpath=//select[@class='product_sort_container']`);
    await expect(optionBox).toBeVisible;
    await optionBox.selectOption("az");
    await page.waitForTimeout(1000);
    await optionBox.selectOption("za");
    await page.waitForTimeout(1000);
    await optionBox.selectOption("lohi");
    await page.waitForTimeout(1000);
    await optionBox.selectOption("hilo");
})
test.afterEach(async({page}) => {
    await page.waitForTimeout(5000)
    await page.close()
})