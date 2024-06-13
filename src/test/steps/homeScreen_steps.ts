
import { When, Then, Given, Before, World } from '@cucumber/cucumber';
import { HomeScreen } from '../pageObjects/HomeScreen.spec';
import { LoginPage } from '../pageObjects/Loginpage.spec';
import { page } from '../../hooks/hooks';


let loginPage : LoginPage;
let homeScreen: HomeScreen



Before(async() =>{
  loginPage = new LoginPage(page);
  homeScreen = new HomeScreen(page);

})

Given('I am on Login page', {timeout : 100*1000}, async function () 
{
      await loginPage.addCookies();
      await loginPage.navigateToURL();
      await console.log("Url Is Launched");
      await homeScreen.validatePageTtile();
  });


  When('I click on Home screen Option', {timeout : 100*4000},async function () 
  {
    await console.log("Landing on Home Screen");
    
  });


