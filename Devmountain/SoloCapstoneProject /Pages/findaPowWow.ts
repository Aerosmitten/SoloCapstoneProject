import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"
   
export class findaPow extends BasePage {
    fullCalendar: By = By.xpath('//button[@class="btn btn-outline-light pt-2 pb-2 btn-lg btn-info huge"]');
    selectMonth: By = By.xpath('//select[@name="srchMonth"]');//Not confident this is the correct one
    month: By = By.xpath('//option[@value="03"]'); //Not confident this is the correct one
    selectYear: By = By.xpath('//select[@name="srchYear"]');//Not confident this is the correct one
    year: By = By.xpath('//option[@value="2024"]'); //NOt confident this is the correct one
    selectState: By = By.xpath('//select[@id="states"]');//Not confident this is the correct one
    state: By = By.xpath('//option[@value="CO"]'); //Not confident this is the correct one
    searchBtn: By = By.xpath('//button[@class="btn btn-primary"]');
    moreAbout: By = By.xpath('//button[@class="btn btn-primary btn-lg"]');
    viewFlyer: By = By.xpath('//button[@class="btn btn-primary btn-lg mt-3"]');
    searchHere: By = By.xpath('//input[@class="orig"]');
    results: By = By.xpath('//div[@class="form-group blue-bg p-3"]');
    
    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
};