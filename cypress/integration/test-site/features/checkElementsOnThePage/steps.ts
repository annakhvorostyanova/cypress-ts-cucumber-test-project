import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import MainPage from "../../../../pages/test-site/MainPage";
import SixthYearPage from '../../../../pages/test-site/SixthYearPage';

When(/^I open the main page$/, () => {
  MainPage.openTermSix();
});
Then(/^I see all the elements on the main page$/, () => {
  MainPage.checkElementsOnThePage();
});

When(/^I open the sixth year section$/, () => {
  cy.visit('/');
 
});
Then(/^I see all the elements on the sixth year section page$/, () => {
  SixthYearPage.checkElementsVisibility();
  
  console.log('checking')
});
