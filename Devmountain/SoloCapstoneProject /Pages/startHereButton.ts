import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class startHere extends BasePage {
    startHere: By = By.xpath('//li[@id="menu-item-96333"]');
    welcome: By = By.xpath('//section[@class="mt-3 mb-3"]');
    find: By = By.xpath('//section[@class="blue-bg2 text-center text-lg-start"]');
    learn: By = By.xpath('(//section[@class="text-center text-lg-start"][1])');
    join: By = By.xpath('//section[@id="community"]');
    shop: By = By.xpath('//section[@id="shop"]');
    mostPopular: By = By.xpath('//section[@id="most"]');
    whatToExpect: By = By.xpath('//section[@id="newsletter"]');
    bottom: By = By.xpath('//div[@class="row p-5"]');
    carrot: By = By.xpath('//a[@class="btn btn-primary shadow"]');
    //locators go here
    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
    async scroll() {
        let frame = await this.driver.findElement(this.welcome);
        let webElement = await this.driver.findElement(this.find);
        let web = await this.driver.findElement(this.learn);
        let somethingElse = await this.driver.findElement(this.join);
        let anotherSomething = await this.driver.findElement(this.shop);
        let someOtherThing = await this.driver.findElement(this.mostPopular);
        let anotherOther = await this.driver.findElement(this.whatToExpect);
        let lastSomething = await this.driver.findElement(this.bottom);
    };
};