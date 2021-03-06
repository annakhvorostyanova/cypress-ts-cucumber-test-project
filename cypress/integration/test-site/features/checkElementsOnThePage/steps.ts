import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import MainPage from "../../../../pages/test-site/MainPage";
import FifthYearPage from '../../../../pages/test-site/FifthYearPage';
import FirstSemesterPage from '../../../../pages/test-site/FirstSemeterPage';
import SecondSemesterPage from '../../../../pages/test-site/SecondSemeterPage';
import ThirdSemesterPage from '../../../../pages/test-site/ThirdSemesterPage';
import FourthSemesterPage from '../../../../pages/test-site/FourthSemesterPage';
import FifthSemesterPage from '../../../../pages/test-site/FifthSemesterPage';
import SixthSemesterPage from '../../../../pages/test-site/SixthSemesterPage';
import FourthYearPage from '../../../../pages/test-site/FourthYearPage';
import SixthYearPage from '../../../../pages/test-site/SixthYearPage';

When(/^I open the main page$/, () => {
  MainPage.visit();
});
Then(/^I see all the elements on the main page$/, () => {
  MainPage.checkElementsOnThePage();
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
Then(/^I see all the titles on the second semester page$/, () => {
  SecondSemesterPage.checkTitlesOnThePage();
});
Then(/^I see all the titles on the second semester page are correct$/, () => {
  SecondSemesterPage.checkTitleValuesOnThePage();
});
Then(/^I open histology exam page$/, () => {
  SecondSemesterPage.openSubjectOne();
});
Then(/^I check correct answer is green and tick symbol is below$/, () => {
  SecondSemesterPage.checkCorrectAnswer();
});
Then(/^I check incorrect answer is red and cross symbol is below$/, () => {
  SecondSemesterPage.checkInCorrectAnswer();
});
Then(/^I check only one answer is correct$/, () => {
  SecondSemesterPage.CountOneCorrectAnswer();
});


When(/^I open the third semester page$/, () => {
  MainPage.visit();
  MainPage.openTermThree();
});
Then(/^I see all the elements on the third semester page$/, () => {
  ThirdSemesterPage.checkElementsOnThePage();
});
Then(/^I see all the titles on the third semester page$/, () => {
  ThirdSemesterPage.checkTitlesOnThePage();
});
Then(/^I see all the titles on the third semester page are correct$/, () => {
  SecondSemesterPage.checkTitleValuesOnThePage();
});


When(/^I open the fourth semester page$/, () => {
  MainPage.visit();
  MainPage.openTermFour();
});
Then(/^I see all the elements on the fourth semester page$/, () => {
  FourthSemesterPage.checkElementsOnThePage();
});
Then(/^I see all the titles on the fourth semester page$/, () => {
  FourthSemesterPage.checkTitlesOnThePage();
});
Then(/^I see all the titles on the fourth semester page are correct$/, () => {
  FourthSemesterPage.checkTitleValuesOnThePage();
});

When(/^I open the fifth semester page$/, () => {
  MainPage.visit();
  MainPage.openTermFive();
});
Then(/^I see all the elements on the fifth semester page$/, () => {
  FifthSemesterPage.checkElementsOnThePage();
});
Then(/^I see all the titles on the fifth semester page$/, () => {
  FifthSemesterPage.checkTitlesOnThePage();
});
Then(/^I see all the titles on the fifth semester page are correct$/, () => {
  FifthSemesterPage.checkTitleValuesOnThePage();
});

When(/^I open the sixth semester page$/, () => {
  MainPage.visit();
  MainPage.openTermSix();
});
Then(/^I see all the elements on the sixth semester page$/, () => {
  SixthSemesterPage.checkElementsOnThePage();
});

When(/^I open the fourth year page$/, () => {
  MainPage.visit();
  MainPage.openTermSevenEight();
});
Then(/^I see all the elements on the fourth year page$/, () => {
  FourthYearPage.checkElementsOnThePage();
});

When(/^I open the fifth year page$/, () => {
  MainPage.visit();
  MainPage.openTermNineTen();
});
Then(/^I see all the elements on the fifth year page$/, () => {
  FifthYearPage.checkElementsOnThePage();
});

When(/^I open the sixth year page$/, () => {
  MainPage.visit();
  MainPage.openTermElevenTwelve();
});
Then(/^I see all the elements on the sixth year page$/, () => {
  SixthYearPage.checkElementsOnThePage();
});