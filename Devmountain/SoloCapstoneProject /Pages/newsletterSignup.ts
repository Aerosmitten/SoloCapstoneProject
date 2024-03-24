import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"
const fs = require('fs')

export class ns extends BasePage {
    //Locators go here
   nameInput: By = By.xpath('//input[@type="text"]');
   emailInput: By = By.xpath('(//input[@class="formkit-input"][2])');
    yesBtn: By =  By.xpath('//span[text()="Yes, I Want It"]');

    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
    async scroll() {
        const frame = await this.driver.findElement(this.nameInput)
        await this.driver.actions()
            .move({origin: frame})
            .perform();
    };
};