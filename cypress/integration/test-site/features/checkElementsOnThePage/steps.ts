import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import FifthCoursePage from '../../../../pages/test-site/FifthCoursePage';
import MainPage from "../../../../pages/test-site/MainPage";

When(/^I open the main page$/, () => {
  MainPage.visit();
});
Then(/^I see all the elements on the main page$/, () => {
  MainPage.checkElementsOnThePage();
});

When(/^I open the fifth course page$/, () => {
  MainPage.openTermNineTen();
});
Then(/^I see all the elements on the fifth course page$/, () => {
  FifthCoursePage.checkElementsOnThePage();
});
