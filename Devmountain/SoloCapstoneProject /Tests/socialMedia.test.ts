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
    await page.scroll(page.faceBook);
    //Click the Facebook link
    await page.click(page.faceBook);
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
    await page.scroll(page.twitter);
 //Click the Twitter link
    await page.click(page.twitter);
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
    await page.scroll(page.instagram);
     //Click the Instagram link
    await page.click(page.instagram);
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
    await page.scroll(page.pint);
     //Click the Pinterest link
    await page.click(page.pint);
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
    await page.scroll(page.youTube);
     //Click the YouTube link
    await page.click(page.youTube);
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
    await page.scroll(page.tikTok);
     //Click the TikTok link
    await page.click(page.tikTok);
        //Screenshot results
    await fs.writeFile(`${__dirname}/smTikTok.png`,
        (e) => {
            if (e) console.error(e)
            else console.log("TikTok Screenshot Successful")
        });
});
});