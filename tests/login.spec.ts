import { test, expect,Page } from '@playwright/test';
import { HomeScreen } from '../src/test/pageObjects/HomeScreen.spec';
import { LoginPage } from '../src/test/pageObjects/Loginpage.spec';
import { WebsiteHomePage } from '../src/test/pageObjects/WebsiteHomePage';


let homeScreen: HomeScreen;
let loginPage : LoginPage;
let websiteHomePage: WebsiteHomePage;

test.beforeEach('Launch URL and Validate page', async({page}) => {
  homeScreen= new HomeScreen(page);
  loginPage = new LoginPage(page);
  websiteHomePage = new WebsiteHomePage(page);

  await loginPage.addCookies();
  await loginPage.navigateToURL();
  await homeScreen.validatePageTtile();
})

test('Navigate to Homescreen and validate page information', async({}) => {
  await websiteHomePage.validatePageOption();
  await websiteHomePage.clickabc();
 })