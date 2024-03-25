import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class sm extends BasePage {
    //Locators go here
    bottom: By = By.xpath('//p[text()="Copyright © 2024 Pow Wows, Inc. All rights reserved"]');
    faceBook: By = By.xpath('//span[@class="dashicons dashicons-facebook me-2"]');
    twitter: By = By.xpath('//span[@class="dashicons dashicons-twitter me-2"]');
    instagram:By = By.xpath('//span[@class="dashicons dashicons-instagram me-1"]');
    pint: By = By.xpath('//span[@class="dashicons dashicons-pinterest me-2"]');
    youTube: By = By.xpath('//span[@class="dashicons dashicons-youtube me-2"]');
    tikTok: By = By.xpath('//img[@class="perfmatters-lazy entered lazyloaded"]');
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