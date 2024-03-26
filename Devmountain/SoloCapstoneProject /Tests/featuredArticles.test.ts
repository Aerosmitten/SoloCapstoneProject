import { fa } from "../Pages/featuredArticles";
const page = new fa();
const fs = require('fs');

describe ("Testing PowWows.com for Solo Capstone Project.", () => {
beforeEach (async () => {
    await page.navigate();
    await page.driver.manage().window().maximize();
});
afterAll (async () => {
    await page.driver.quit();
});
test ("Testing the Featured Articles/See All Articles", async () => {
//First scroll down to the Featured Article section
await page.scroll(page.seeAll);
//Take a screenshot
fs.writeFile(`${__dirname}/fa1.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot One Successful")
});
//Then click "See All Articles"
await page.click(page.seeAll);
//Another screenshot
fs.writeFile(`${__dirname}/fa2.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Two Successful")
});
//Scroll down to "Read all Articles"
await page.scroll(page.readAll);
//Take a scereenshot
fs.writeFile(`${__dirname}/fa3.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Three Successful")
});
//Click "Read all Articles"
await page.click(page.readAll);
//Another screenshot
fs.writeFile(`${__dirname}/fa4.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Four Successful")
});
//Scroll to bottom of page
await page.scroll(page.overOver);
//Another screenshot
fs.writeFile(`${__dirname}/fa5.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Five Successful")
});
//Click the >>
await page.click(page.overOver);
//Scroll back down to the bottom of the page
await page.scroll(page.pN);
//One last screenshot
fs.writeFile(`${__dirname}/fa6.png`,
await page.driver.takeScreenshot(), 'base64',
async (e) => {
    if (e) console.error(e)
    else console.log("Screenshot Six Successful")
});
});
});