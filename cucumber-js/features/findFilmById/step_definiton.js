// const { Given, When, Then, Before, After } = require('cucumber')
// const { Builder, By, Key, until } = require('selenium-webdriver')
// const assert = require('assert')
// let driver

// Before(async function () {
//     driver = await new Builder()
//         .forBrowser('chrome')
//         .build()
// })

// Given('I am on the find films by id page', async function () {
//     await driver.get('http://localhost:3000/film')
// })

// When('I enter id {string}', async function (category) {
//     const input = await driver.findElement(By.id('id'))
//     await input.sendKeys(category)
// })

// When('I click the find by id button', async function () {
//     const button = await driver.findElement(By.id('findById'))
//     await button.click()
// })

// Then('I should see a {string} films', async function (name) {
//     const films = await driver.findElements(By.id('responseById'))
//     assert.equal(films, name)
// })

// After(async function () {
//     await driver.quit()
// })