import {expect, Page, Locator} from '@playwright/test';
export class HomeScreen {
    readonly page:Page;
    readonly host:Locator;
    constructor(page:Page) {
        this.page = page;
        this.host = page.locator("text=abc");
        console.log("Launch URL constructor");
    }

    async validatePageTtile() {
        await expect(this.page).toHaveTitle('Host');
    }

   
    async selectOption() {
                await this.host.click();    
    }
}
