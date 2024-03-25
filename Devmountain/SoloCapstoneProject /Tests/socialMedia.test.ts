import { sm } from "../Pages/socialMedia";
const page = new sm();
const fs = require('fs')

describe("Testing PowWows.com for Solo Capstone Project.", () => {
beforeEach(async () => {
    await page.navigate();
    await page.driver.manage().window().maximize();
});
afterAll(async () => {
    await page.driver.quit();
});
test("Testing the FaceBook social media link", async () => {
    //Scroll to the bottom of the page
    await page.scroll(page.bottom);
    //Click the Facebook link
    await page.click(page.faceBook);
    await page.driver.sleep(2000);
    //Screenshot results
    await fs.writeFile(`${__dirname}/smFace.png`,
    await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log("Facebook Screenshot Successful")
        });
});
test("Testing the Twitter social media link", async () => {
 //Scroll to the bottom of the page
    await page.scroll(page.bottom);
 //Click the Twitter link
    await page.click(page.twitter);
    await page.driver.sleep(2000);
    //Screenshot results
    await fs.writeFile(`${__dirname}/smTwitter.png`,
    await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log("Twitter Screenshot Successful")
        });
});
test("Testing the Instagram social media link", async() => {
     //Scroll to the bottom of the page
    await page.scroll(page.bottom);
     //Click the Instagram link
    await page.click(page.instagram);
    await page.driver.sleep(2000);
        //Screenshot results
    await fs.writeFile(`${__dirname}/smInstagram.png`,
    await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log("Instagram Screenshot Successful")
        });
});
test("Testing the Pinterest social media link", async () => {
     //Scroll to the bottom of the page
    await page.scroll(page.bottom);
     //Click the Pinterest link
    await page.click(page.pint);
    await page.driver.sleep(2000);
        //Screenshot results
    await fs.writeFile(`${__dirname}/smPint.png`,
    await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log("Pinterest Screenshot Succesful")
        });
});
test("Testing the YouTube social media link", async () => {
     //Scroll to the bottom of the page
    await page.scroll(page.bottom);
     //Click the YouTube link
    await page.click(page.youTube);
    await page.driver.sleep(2000);
        //Screenshot results
    await fs.writeFile(`${__dirname}/smYouTube.png`,
    await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log("YouTube Screenshot Successful")
        });
});
test("Testing the TikTok social media link", async () => {
     //Scroll to the bottom of the page
    await page.scroll(page.bottom);
     //Click the TikTok link
    await page.click(page.tikTok);
    await page.driver.sleep(2000);
        //Screenshot results
    await fs.writeFile(`${__dirname}/smTikTok.png`,
    await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log("TikTok Screenshot Successful")
        });
});
});