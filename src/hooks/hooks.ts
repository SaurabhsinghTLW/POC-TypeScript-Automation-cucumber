import { Before, After, AfterStep, Status, AfterAll } from '@cucumber/cucumber';
import { devices, webkit, Page } from '@playwright/test';
import { fail } from 'assert';
import path from 'path';
import of  from 'process';


export let page: Page;

// To run on single enviornment
Before({timeout : 100*4000},async function () {
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext({
        ...devices['iPhone 14 Pro Max'],
    });
    page = await context.newPage();
});

AfterAll(function () {
    console.log("Execution Finished");
});

AfterStep(async function ({ result }) {
    if (result.status == Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot.png' });
    }
});