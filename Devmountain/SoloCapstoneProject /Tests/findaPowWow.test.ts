import { findaPow } from "../Pages/findaPowWow"
const page = new findaPow()
const fs = require ('fs')

describe("Testing PowWows.com for Solo Capstone Project.", () => {
beforeEach (async () => {
    await page.navigate();
});
afterAll (async () => {
    await page.driver.quit();
});
test.skip ("Testing the Find a Pow Wow search by Month, Year, and State dropdown menus", async () => {
//First click on the "Full Calendar" button 
await page.click(page.fullCalendar);
// Then select March for month
await page.click(page.selectMonth);
await page.click(page.month);
//Then select 2024 for year
await page.click(page.selectYear);
await page.click(page.year);
//Then select Colorado for State
await page.click(page.selectState);
await page.click(page.year);
//Then click the search button
await page.click(page.searchBtn);
//Screenshot this page
fs.writeFile(`${__dirname}/powWow1.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot One Successful")
});
//Click the "More about this Pow Wow" button
await page.click(page.moreAbout);
//Screenshot this page
fs.writeFile(`${__dirname}/powWow2.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot TWo Successful")
});
//Click the "View Flyer" button
await page.click(page.viewFlyer);
//Take screenshot
fs.writeFile(`${__dirname}/powWow3.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Three Successful")
});
});
test ("Testing the Find a Pow Wow seach by entering a city in the 'Search here' input box", async () => {
//First click on the "Full Calendar" button
await page.click(page.fullCalendar);
//Then click into the "Search here" input box
await page.click(page.searchHere);
//Enter "Denver" into the search input
await page.driver.findElement(page.searchHere).sendKeys("Denver")
await page.driver.findElement(page.results);
await page.driver.sleep(5000);
//Screenshot results
fs.writeFile(`${__dirname}/powWow4.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Four Successful")
});
});
});