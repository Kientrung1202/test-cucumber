const { Given, When, Then, Before, After } = require('cucumber')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
let driver


Before(async function () {
    driver = await new Builder()
        .forBrowser('chrome')
        .build()
})


Given('I am on the login page', async function () {
    await driver.get('http://localhost:3000/login')
})

When('I enter {string} and {string}', async function (username, password) {
    await driver.findElement(By.id('username')).sendKeys(username)
    await driver.findElement(By.id('password')).sendKeys(password)

})

When('I click the login button', async function () {
    await driver.findElement(By.tagName('button')).click()
})

Then('I should see {string}', async function (message) {
    const actualMessage = await driver.findElement(By.id('response')).getText()
    assert.equal(actualMessage, message)
})

After(async function () {
    await driver.quit()
})