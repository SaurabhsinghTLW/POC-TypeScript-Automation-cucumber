import { Locator,Page,expect } from '@playwright/test';

export class Page1 {
    readonly page:Page;
    private pageHeader:Locator;
   private claimButton: Locator;


    constructor(page:Page) {
        this.page = page;
        this.pageHeader = page.locator('text=Home').first();
        this.claimButton = page.locator('text=abc');
    }

    async validatePageHeaderIsVisible()
    {
        await expect(this.pageHeader).toBeVisible();
    }

    async validateButtonIsVisible() {       
        await expect(this.claimButton).toBeVisible();
    }

   
    
}