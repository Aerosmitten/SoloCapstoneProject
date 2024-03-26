import { bsb } from "../Pages/bigSearchButtons";
const page = new bsb();
const fs = require ('fs');

describe("Testing PowWows.com for Solo Capstone Project.", () => {
    beforeEach(async () => {
        await page.navigate();
        await page.driver.manage().window().maximize();
        await page.driver.sleep(2000);
    });
    afterAll(async () => {
        await page.driver.quit();
    });
test ("Testing the big search buttons and taking a screenshot of the results, Find a Pow Wow", async () => {
//First we scroll down to the big search  buttons
await page.scroll();
//Then we click Find a Pow Wow
await page.click(page.findA);
await page.driver.sleep(2000);
//Screenshot the results
await fs.writeFile(`${__dirname}/bsbFindaPow.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("bsb Find a Pow Screenshot Successful")
});
});
test ("Testing the big search buttons and taking a screenshot of the results, Learn & Explore", async () => {
//Scroll back down to big search buttons
await page.scroll();
//Click Learn & Explore
await page.click(page.learnAnd);
await page.driver.sleep(2000);
//Screenshot the results
await fs.writeFile(`${__dirname}/bsbLearnAnd.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("bsb Learn and Screenshot Successful")
});
});
test ("Testing the big search buttons and taking a screenshot of the results, Join our Community", async () => {
//Scroll back down to big search buttons
await page.scroll();
//Click Join our Community
await page.click(page.joinOur);
await page.driver.sleep(2000);
//Screenshot the results
await fs.writeFile(`${__dirname}/bsbJoinOur.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("bsb Join our Screenshot Successful")
});
});
test ("Testing the big search buttons and taking a screenshot of the results, Shop Native", async () => {
//Scroll back down to the big search buttons
await page.scroll();
//Click Shop Native
await page.click(page.shopNative);
await page.driver.sleep(2000);
//Screenshot the results
await fs.writeFile(`${__dirname}/bsbShopNative.png`,
await page.driver.takeScreenshot(), 'base64',
(e) => {
    if (e) console.error(e)
    else console.log("bsb Shop Native Screenshot Successful")
});
});
});