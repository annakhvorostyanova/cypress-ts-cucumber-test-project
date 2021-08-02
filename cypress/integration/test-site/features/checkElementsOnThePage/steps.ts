import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import MainPage from "../../../../pages/test-site/MainPage";

When(/^I open the main page$/, () => {
  MainPage.visit();
});
Then(/^I see all the elements on the main page$/, () => {
  MainPage.checkElementsOnThePage();
});
