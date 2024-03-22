import { doDrop } from "../Pages/doDropdownMenusDropDown";
const page = new doDrop();
const fs = require('fs');

describe("Testing PowWows.com for Solo Capstone Project.  Checking to see if the dropdown menus drop down, taking a screenshot of the dropped down menus", () => {
    beforeEach(async () => {
    await page.navigate();
    });
afterAll(async () => {
    await page.driver.quit()
});
test ("Checking to see if the Find a Pow Wow dropdown menu drops down, taking a screenshot of the dropped down menus", async () => {
// First we want to hover the mouse over the "Find a PowWow" dropdown menu
await page.canHover(page.find),
//Then we want to take a screenshot of this 
await fs.writeFile(`${__dirname}/findaDrop.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("Find a Pow Wow Dropdown Screenshot Successful");
});
});
test ("Checking to see if the Learn & Explore dropdown menu drops down, taking a screenshot of the dropped down menus", async () => {
//Hover mouse over the "Learn and Explore" dropdown menu
await page.canHover(page.learn),
//Then we want to take a screenshot of this
await fs.writeFile(`${__dirname}/learnDrop.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("Learn & Explore Dropdown Screenshot Successful");
});
});
test ("Checking to see if the Join our Community dropdown menu drops down, taking a screenshot of the dropped down menus", async () => {
//Hover mouse over the "Join our Community" dropdown menu
await page.canHover(page.join),
//Then we want to take a screenshot of this
await fs.writeFile(`${__dirname}/joinDrop.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("Join our Community Dropdown Screenshot Successful");
});
});
test ("Checking to see if the Shop dropdown menu drops down, taking a screenshot of the dropped down menus", async () =>{
//Hover mouse over the "Shop" dropdown menu
await page.canHover(page.shop),
//Then we want to take a screenshot of this
await fs.writeFile(`${__dirname}/shopDrop.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("Shop Dropdown Screenshot Successful");
});
});
});