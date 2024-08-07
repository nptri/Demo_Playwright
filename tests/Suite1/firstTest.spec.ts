import {test} from '@playwright/test'


//before each test
test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/')
})

//basic test structure - await important that will need for promise to be returned
test('the first test', async ({page}) =>{
    await page.getByText('Form Layouts').click()
})

test('the second test', async ({page}) =>{
    await page.getByText('Datepicker').click()
})


// demo suit
test.describe('test suite 1', () => {
        test.beforeEach(async({page}) => {
            await page.goto('http://localhost:4200/')
            await page.getByText('Forms').click()
        })

        test('test suite 1 - case 1', async ({page}) =>{
            await page.getByText('Form Layouts').click()
        })

        test('test suite 1 - case 2', async ({page}) =>{
            await page.getByText('Datepicker').click()
        })
})

//suite 2 - wrong case
test.describe('test suite 2', () => {
    test.beforeEach(async({page}) => {
        await page.goto('http://localhost:4200/')
        await page.getByText('Charts').click()
    })

    test('test suite 2 - case 1', async ({page}) =>{
        await page.getByText('Form Layouts').click()
    })

    test('test suite 2 - case 2', async ({page}) =>{
        await page.getByText('Datepicker').click()
    })
})