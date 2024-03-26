import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class sn extends BasePage {
    //locators go here
    bigSearchBtn: By = By. 
    searchInput: By = By. 
    searchListingBtn: By = By. 
    clothingAndAcc: By = By. 
    art: By = By. 
    jewlery: By = By. 
    food: By = By. 
    beauty: By = By. 
    beadwork: By = By. 
    supplies: By = By. 
    books: By = By. 
    homeBtn: By = By. 
    hoverShop: By = By. 
    shopNative: By = By. 
    viewAllListings: By = By. 
    shopDrop: By = By. 
    powWow: By = By. 
    directoryOf: By = By. 
    classifieds: By = By. 

    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
    async scroll(elementBy:By) {
        const scrollThing = await this.getElement(elementBy); 
        await this.driver.actions()
        .move({origin: scrollThing}) 
        .perform(); 
        await this.driver.sleep(2000)
    };
};