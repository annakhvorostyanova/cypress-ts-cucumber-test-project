import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import SixthYearPage from '../../../../pages/test-site/SixthYearPage';


When(/^I open the Sixth Year page$/, () => {
  SixthYearPage.visit();
});
Then(/^I see all the elements on the Sixth Year page$/, () => {
  SixthYearPage.checkElementsOnSixthYearPage();
});
