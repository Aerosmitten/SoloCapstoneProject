import { By } from "selenium-webdriver"
import { BasePage } from "./basePage.ts"

export class startHere extends BasePage {

    //locators go here
    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
};