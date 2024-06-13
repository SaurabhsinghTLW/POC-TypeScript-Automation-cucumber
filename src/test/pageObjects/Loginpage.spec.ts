
import { Page } from "@playwright/test";

export class LoginPage {
   readonly page:Page;

constructor (page:Page){
   this.page = page;
}

async addCookies()
{
  await this.page.context().addCookies([ { name: 'abc', value: 'xyz', path: '/', domain: 'domain name' }]);
}

async navigateToURL() {
   await this.page.goto("https://google.com");
}
}
