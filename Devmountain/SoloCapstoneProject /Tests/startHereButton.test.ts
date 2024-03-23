import { startHere } from "../Pages/startHereButton";
const page = new startHere();
const fs = require('fs');

describe("Testing PowWows.com for Solo Capstone Project.", () => {
beforeEach(async () => {
    await page.navigate();
    await page.driver.manage().window().maximize();
    await page.driver.sleep(2000);
});
afterAll(async () => {
    await page.driver.quit();
});
test("Testing the 'Start Here' button and looking through the page", async () => {
    //Click the "start Here" button
    await page.click(page.startHere);
    //Take a screenshot
    await fs.writeFile(`${__dirname}/start1.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot One Successful")
    });
    //Scroll down to Welcome section
    await page.scroll(page.welcome);
    //Take a screenshot
    await fs.writeFile(`${__dirname}/start2.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Two Successful")
    });
    //Scroll to Fnd a Pow Wow
    await page.scroll(page.find);
    //Take a screenshot
    await fs.writeFile(`${__dirname}/start3.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Three Successful")
    });
    //Scroll to Learn & Explore
    await page.scroll(page.learn);
    //Take a screemshot
    await fs.writeFile(`${__dirname}/start4.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Four Successful")
    });
    //Scroll to Join our Community
    await page.scroll(page.join);
    //Take a screenshot
    await fs.writeFile(`${__dirname}/start5.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Five Successful")
    });
    //Scroll to Shop
    await page.scroll(page.shop);
    //Take screenshot
    await fs.writeFile(`${__dirname}/start6.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Six Successful")
    });
    //Scroll to Most Popular Articles
    await page.scroll(page.mostPopular);
    //Take screenshot
    await fs.writeFile(`${__dirname}/start7.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Seven Successful")
    });
    //Scroll to What to Expect
    await page.scroll(page.whatToExpect);
    //Take Screenshot
    await fs.writeFile(`${__dirname}/start8.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Eight Successful")
    });
    //Scroll to the bottom of the page
    await page.scroll(page.bottom);
    //Take screenshot
    await fs.writeFile(`${__dirname}/start9.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Nine Successful")
    });
    await page.click(page.carrot);
});

});