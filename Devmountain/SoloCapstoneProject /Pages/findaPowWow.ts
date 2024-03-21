import { By } from "selenium-webdriver"
import { BasePage } from "./basePage.ts"

export class findaPow extends BasePage {

    //locators go here
    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
};