const {
    Given,
    When,
    Then,
    BeforeAll,
    AfterAll
} = require("cucumber");
const { chromium } = require("playwright");
const expect = require("expect");

let browser;
let context;
let page;

BeforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext();
    page = await context.newPage()
})

AfterAll(() => {
    browser.close();
})

Given('I am on conduit app\'s Sign In page', async () => {
    await page.goto('https://react-redux.realworld.io/#/login')
    const title = await page.title()
    expect(title).toBe('Conduit')
})

When('I enter email and password', async () => {
    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
})

When('I click on Sign In button', async () => {
    await page.click("form >> 'Sign in'")
})

Then('The page should display {string}', async (string) => {
    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch(string)
})