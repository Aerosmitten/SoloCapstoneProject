import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class bsb extends BasePage {
    //Locators go here
    search: By = By.xpath('//p[text()="Powwow Nation, Facebook Group, and Group Forums"]');
    findA: By = By.xpath('//a[text()="Find a "]');
    learnAnd: By = By.xpath('//a[text()="Learn "]');
    joinOur: By = By.xpath('//a[text()="Join Our "]');
    shopNative: By = By.xpath('(//a[text()="Shop"])[3]');
    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
    async scroll() {
        const frame = await this.driver.findElement(this.search)
        await this.driver.actions()
            .move({origin: frame})
            .perform();
    };
};