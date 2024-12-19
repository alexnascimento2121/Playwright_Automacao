const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"')

    await page.waitForTimeout(5000)
    // el => retornar dentro da variavel el no tipo de texto innerText se for encontrado o navbar-brand
    const logoText = await page.$eval('.navbar-brand', el => el.innerText)
    console.log('logoText: ' + logoText)
    // retornar o href da pagina com nome de navbar-brand
    const logoHref = await page.$eval('.navbar-brand', el => el.href)
    console.log('logoHref: ' + logoHref)
    // retornar para constante em forma de array usando length para contar os elementos assim que encontrar a tag-default
    const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
    console.log('popularTagsCount: ' + popularTagsCount)

    // similar a parte de cima
    const content = await page.textContent('.navbar-brand')
    console.log('content: ' + content)

    const text = await page.innerText('.navbar-brand')
    console.log('text: ' + text)

    const html = await page.innerHTML('.feed-toggle')
    console.log('html: ' + html)

    const href = await page.getAttribute('.navbar-brand', 'href')
    console.log('href: ' + href)

    await browser.close()
})()