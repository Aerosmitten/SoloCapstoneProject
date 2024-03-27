import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class sn extends BasePage {
    //locators go here
    bigSearchBtn: By = By.xpath('(//a[text()="Shop"])[3]');
    searchInput: By = By.xpath('(//input[@name="q"])[2]');
    searchListingBtn: By = By.xpath('//div[@class="directorist-search-form-action__submit"]');
    results: By = By.xpath('//h1[text()="Search Result"]');
    clothingAndAcc: By = By.xpath('//h4[text()="Clothing and Accessories"]');
    art: By = By.xpath('//h4[text()="Art"]');
    jewlery: By = By.xpath('//h4[text()="Jewelry"]');
    food: By = By.xpath('//h4[text()="Food"]');
    beauty: By = By.xpath('//h4[text()="Beauty"]');
    beadwork: By = By.xpath('//h4[text()="Beadwork"]');
    supplies: By = By.xpath('//h4[text()="Pow Wow Supplies & Regalia"]');
    books: By = By.xpath('//h4[text()="Books"]');
    homeBtn: By = By.xpath('//img[@class="logo ms-md-5 no-lazy"]');
    hoverShop: By = By.xpath('(//a[text()="Shop"][1])');
    shopNative: By = By.xpath('(//a[text()="Shop Native"])[1]');
    viewAllListings: By = By.xpath('//button[text()="View all Listings"]');
    shopDrop: By = By.xpath('(//a[text()="Shop"])[1]');
    powWow: By = By.xpath('(//a[text()="Powwows.com Stores"])[1]');
    shopNow: By = By.xpath('(//button[text()="Shop Now"])[1]');
    directoryOf: By = By.xpath('(//button[text()="Shop Now"])[2]');
    classifieds: By = By.xpath('(//a[text()="Classifieds"])[1]');

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
    async canHover(elementBy:By) {
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
    };
};