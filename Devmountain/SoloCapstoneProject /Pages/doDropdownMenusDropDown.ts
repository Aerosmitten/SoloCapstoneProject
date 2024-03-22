import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class doDrop extends BasePage {
    find: By = By.xpath('(//a[text()="Find a Pow Wow"][1])');
    learn: By = By.xpath('(//a[text()="Learn & Explore"][1])');
    join: By = By.xpath('(//a[text()="Join our Community"][1])');
    shop: By = By.xpath('(//a[text()="Shop"][1])');

    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
    async canHover(elementBy:By) {
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
    };
};