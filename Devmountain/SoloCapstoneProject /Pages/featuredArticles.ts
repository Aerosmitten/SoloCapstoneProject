import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class fa extends BasePage {
    //locators go here
    seeAll: By = By.xpath('//button[text()="See All Articles"]');
    readAll: By = By.xpath('//button[text()="Read All Articles"]');
    overOver: By = By.xpath('(//li[@class="page-item"])[4]');
    pN: By = By.xpath('//span[text()="Page navigation"]');
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

