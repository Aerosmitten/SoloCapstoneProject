import { ns } from "../Pages/newsletterSignup";
const page = new ns();
const fs = require('fs');

describe("Testing PowWows.com for Solo Capstone Project.", () => {
beforeEach(async () => {
    await page.navigate();
});
afterAll(async () => {
    await page.driver.quit();
});
test ("Testing the Newsletter Signup and screenshotting our results", async () => {
    //First we must scroll down to the bottom of the page
    await page.scroll()
    //Then click into the name input box
    await page.click(page.nameInput);
    //Then enter "Adriana" into the name input box
    await page.sendKeys(page.nameInput, "Adriana");
    //Then click into the email input box
    await page.click(page.emailInput);
    //Then enter "Aerosmitten@duck.com" into the email input box
    await page.sendKeys(page.emailInput, "Aerosmitten@duck.com");
    //Click the "Yes, I Want It" button
    await page.click(page.yesBtn);
    //Screenshot results
    await fs.writeFile(`${__dirname}/newsletter.png`,
    await page.driver.takeScreenshot(), 'base64',
    (e) => {
        if (e) console.error(e)
        else console.log("Newsletter Screenshot Successful")
    });
});
});