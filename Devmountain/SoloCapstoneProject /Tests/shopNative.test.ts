import { sn } from "../Pages/shopNative";
const page = new sn();
const fs = require('fs');

describe ("Testing PowWows.com for Solo Capstone Project.", () => {
    beforeEach (async () => {
        await page.navigate();
        await page.driver.manage().window().maximize();
    });
    afterAll (async () => {
        await page.driver.quit();
    });
test.skip ("Testing Shopping from the Big Search Button and using the search input", async () => {
    //Scroll down to the Big Search Buttons
    await page.scroll(page.bigSearchBtn);
    //Click "Shop Native"
    await page.click(page.bigSearchBtn);
    //Click into input field
    await page.click(page.searchInput);
    //Enter "Ribbin Skirt"
    await page.sendKeys(page.searchInput, "Ribbon Skirt");
    //Click "Search Listing"
    await page.click(page.searchListingBtn);//can't quite get to the results, possibly wrong locator for submit button??
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Ribbon Skirt Successful")
    });
});
test.skip ("Testing Shopping from the Big Search Button and trying all of the Popular Categories", async () => {//Not getting the correct screenshots
    //Scroll down to the Big Search Buttons
    await page.scroll(page.bigSearchBtn);
    //Click "Shop Native"
    await page.click(page.bigSearchBtn);
    //Click "Clothings and Accessories"
    await page.click(page.clothingAndAcc)
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-clothing-accessories.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Clothing and Accessories Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "art"
    await page.click(page.art);
    //Screenshot resluts
    fs.writeFile(`${__dirname}/shop-bsb-Attr.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Art Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Jewlery"
    await page.click(page.jewlery);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-jewlery.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Jewlery Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Food"
    await page.click(page.food);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-food.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Food Succesful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Beauty"
    await page.click(page.beauty);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-beauty.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Beauty Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Beadwork"
    await page.click(page.beadwork);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-beadwork.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Beadwork Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Pow Wow Supplies & Regalia"
    await page.click(page.supplies);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-supples.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Supplies Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Books"
    await page.click(page.books);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-books.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Books Successful")
    });

});
test.skip ("Testing Shopping from the Dropdown Menu and View all Listings", async () => { //Not getting screenshot of the correct thing
    //Hover over "Shop" Dropdown Menu
    await page.canHover(page.hoverShop);
    //Click "Shop Native"
    await page.click(page.shopNative);
    //Click "View all Listings"
    await page.click(page.viewAllListings);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-viewAll.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot View All Successful")
    });
});
test.skip ("Testing Shopping by clicking the 'Shop' Dropdown Menu and Shop Pow Wows Merch", async () => { //Not getting screenshot of correct thing
    //Click the "Shop" dropdown Menu
    await page.click(page.shopDrop);
    //Click "Shop Now" on Shop Pow Wows Merch
    await page.click(page.shopNow);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-PowWow-Merch.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Pow Wow Merch Successful")
    });
});
test.skip ("Testing Shopping by clicking the 'Shop' Dropdown Menu and Directory of Native Products/Stores", async () => {//Not getting correct screenshot
    //Click the "Shop" Dropdown Menu
    await page.click(page.shopDrop);
    //Click "Shop Now" on Directory of Native Products/Stores
    await page.click(page.directoryOf);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-directory.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Directory of Native Products/Stores Successful")
    });
});
test ("Testing Shopping from the Dropdown Menu and Pow Wows Classifieds", async () => {//wrongs locator??
    //Click the "Shop" Dropdown Menu
    await page.click(page.shopDrop);
    await page.scroll(page.classifieds);    //Click "Join Today" on Pow Wows Classifieds
  
    await page.click(page.classifieds);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-classifieds.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Classifieds Successful")
    });

});
});