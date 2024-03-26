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

    //Click "Shop Native"

    //Click into input field

    //Enter "Ribbin Skirt"

    //Click "Search Listing"

    //Screenshot results

});
test ("Testing Shopping from the Big Search Button and trying all of the Popular Categories", async () => {
    //Scroll down to the Big Search Buttons

    //Click "Shop Native"

    //Click "Clothings and Accessories"

    //Screenshot results

    //Click Home button

    //Click "art"

    //Screenshot resluts

    //Click Home button

    //Click "Jewlery"

    //Screenshot results

    //Click Home button

    //Click "Food"

    //Screenshot results

    //Click Home button

    //Click "Beauty"

    //Screenshot results

    //Click Home button

    //Click "Beadwork"

    //Screenshot results

    //Click Home button

    //Click "Pow Wow Supplies & Regalia"
    
    //Screenshot results

    //Click Home button

    //Click "Books"

    //Screenshot results


});
test ("Testing Shopping from the Dropdown Menu and View all Listings", async () => {
    //Hover over "Shop" Dropdown Menu

    //Click "Shop Native"

    //Click "View all Listings"

    //Screenshot results

});
test ("Testing Shopping by clicking the 'Shop' Dropdown Menu and Shop Pow Wows Merch", async () => {
    //Click the "Shop" dropdown Menu

    //Click "Shop Now" on Shop Pow Wows Merch

    //Screenshot results

});
test ("Testing Shopping by clicking the 'Shop' Dropdown Menu and Directory of Native Products/Stores", async () => {
    //Click the "Shop" Dropdown Menu

    //Click "Shop Now" on Directory of Native Products/Stores

    //Screenshot results
});
test ("Testing Shopping from the Dropdown Menu and Pow Wows Classifieds", async () => {
    //Click the "Shop" Dropdown Menu

    //Click "Join Today" on Pow Wows Classifieds

    //Screenshot results

});
});