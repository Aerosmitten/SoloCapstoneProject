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
test ("Testing Shopping from the Big Search Button and using the search input", async () => {
    //Scroll down to the Big Search Buttons
    await page.scroll(page.bigSearchBtn);
    //Click "Shop Native"
    await page.click(page.bigSearchBtn);
    //Click into input field
    await page.click(page.searchInput);
    //Enter "Ribbin Skirt"
    await page.sendKeys(page.searchInput, "Ribbon Skirt");
    //Press "Enter"
    await page.driver.actions().sendKeys("\uE007").perform();
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-input.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Ribbon Skirt Successful")
    });
});
test ("Testing Shopping from the Big Search Button and trying all of the Popular Categories", async () => {
    //Scroll down to the Big Search Buttons
    await page.scroll(page.bigSearchBtn);
    //Click "Shop Native"
    await page.click(page.bigSearchBtn);
    //Click "Clothings and Accessories"
    await page.click(page.clothingAndAcc)
    await page.driver.sleep(2000);
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
    await page.driver.sleep(2000);
    //Screenshot resluts
    fs.writeFile(`${__dirname}/shop-bsb-Art.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Art Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    //Click "Jewlery"
    await page.click(page.jewlery);
    await page.driver.sleep(2000);
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
    await page.driver.sleep(2000);
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
    await page.scroll(page.locator);
    await page.click(page.beauty);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-beauty.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Beauty Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    await page.scroll(page.locator);
    //Click "Beadwork"
    await page.click(page.beadwork);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-beadwork.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Beadwork Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    await page.scroll(page.locator);
    //Click "Pow Wow Supplies & Regalia"
    await page.click(page.supplies);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-supples.png`,
    await page.driver.takeScreenshot(), 'base64',
    async(e) => {
        if (e) console.error(e)
        else console.log("Screenshot Supplies Successful")
    });
    //Click Home button
    await page.click(page.homeBtn);
    await page.scroll(page.locator);
    //Click "Books"
    await page.click(page.books);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-bsb-books.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Books Successful")
    });

});
test ("Testing Shopping from the Dropdown Menu and View all Listings", async () => {
    //Hover over "Shop" Dropdown Menu
    await page.canHover(page.hoverShop);
    //Click "Shop Native"
    await page.click(page.shopNative);
    //Click "View all Listings"
    await page.click(page.viewAllListings);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-viewAll.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot View All Successful")
    });
});
test ("Testing Shopping by clicking the 'Shop' Dropdown Menu and Shop Pow Wows Merch", async () => { 
    //Click the "Shop" dropdown Menu
    await page.click(page.shopDrop);
    //Click "Shop Now" on Shop Pow Wows Merch
    await page.click(page.shopNow);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-PowWow-Merch.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Pow Wow Merch Successful")
    });
});
test ("Testing Shopping by clicking the 'Shop' Dropdown Menu and Directory of Native Products/Stores", async () => {
    //Click the "Shop" Dropdown Menu
    await page.click(page.shopDrop);
    //Click "Shop Now" on Directory of Native Products/Stores
    await page.click(page.directoryOf);
    await page.driver.sleep(2000);
    //Screenshot results
    fs.writeFile(`${__dirname}/shop-drop-directory.png`,
    await page.driver.takeScreenshot(), 'base64',
    async (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Directory of Native Products/Stores Successful")
    });
});
test ("Testing Shopping from the Dropdown Menu and Pow Wows Classifieds", async () => {
    //Click the "Shop" Dropdown Menu
    await page.click(page.shopDrop);
    await page.scroll(page.classifieds);   
     //Click "Join Today" on Pow Wows Classifieds
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