import { Locator,Page,expect } from '@playwright/test';

export class WebsiteHomePage {
    readonly page:Page;
   private pageHeader: Locator;
   private abc: Locator;


    constructor(page:Page) {
        this.page = page;
        this.pageHeader = page.locator('text=Header');
        this.abc= page.locator('text=Title');
     
    }

    async validatePageOption() {
        await expect(this.pageHeader).toBeVisible();
        await expect(this.abc).toBeVisible();
    }

async clickabc()
{
await this.abc.click();
}

}
