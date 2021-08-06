import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import MainPage from "../../../../pages/test-site/MainPage";
import FifthCoursePage from '../../../../pages/test-site/FifthCoursePage';
import FirstSemesterPage from '../../../../pages/test-site/FirstSemeterPage';
import SecondSemesterPage from '../../../../pages/test-site/SecondSemeterPage';
import ThirdSemesterPage from '../../../../pages/test-site/ThirdSemesterPage';
import FourthSemesterPage from '../../../../pages/test-site/FourthSemesterPage';
import FifthSemesterPage from '../../../../pages/test-site/FifthSemesterPage';
import SixthSemesterPage from '../../../../pages/test-site/SixthSemesterPage';

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

When(/^I open the first semester page$/, () => {
  MainPage.visit();
  MainPage.openTermOne();
});
Then(/^I see all the elements on the first semester page$/, () => {
  FirstSemesterPage.checkElementsOnThePage();
});

When(/^I open the second semester page$/, () => {
  MainPage.visit();
  MainPage.openTermTwo();
});
Then(/^I see all the elements on the second semester page$/, () => {
  SecondSemesterPage.checkElementsOnThePage();
});

When(/^I open the third semester page$/, () => {
  MainPage.visit();
  MainPage.openTermThree();
});
Then(/^I see all the elements on the third semester page$/, () => {
  ThirdSemesterPage.checkElementsOnThePage();
});

When(/^I open the fourth semester page$/, () => {
  MainPage.visit();
  MainPage.openTermFour();
});
Then(/^I see all the elements on the fourth semester page$/, () => {
  FourthSemesterPage.checkElementsOnThePage();
});

When(/^I open the fifth semester page$/, () => {
  MainPage.visit();
  MainPage.openTermFive();
});
Then(/^I see all the elements on the fifth semester page$/, () => {
  FifthSemesterPage.checkElementsOnThePage();
});

When(/^I open the sixth semester page$/, () => {
  MainPage.visit();
  MainPage.openTermSix();
});
Then(/^I see all the elements on the sixth semester page$/, () => {
  SixthSemesterPage.checkElementsOnThePage();
});
