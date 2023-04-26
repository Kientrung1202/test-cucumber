const { Given, When, Then, Before, After } = require('cucumber')
const { Builder, By, Key, until } = require('selenium-webdriver')
let driver


Before(async function () {
    driver = await new Builder()
        .forBrowser('chrome')
        .build()
})

Given('I am on the find films page', async function () {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/film')
})

When('I enter {string}', async function (category) {
    const input = await driver.findElement(By.id('category'))
    await input.sendKeys(category)
})

When('I click the find button', async function () {
    const button = await driver.findElement(By.id('findByCategory'))
    await button.click()
})

Then('I should see {string} films', async function (numberOfFilm) {
    const films = await driver.findElement(By.className('name'))
    assert.equal(films.length.toString(), numberOfFilm)
})

After(async function () {
    await driver.quit()
})