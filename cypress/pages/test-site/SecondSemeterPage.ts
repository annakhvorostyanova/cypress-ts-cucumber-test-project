import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm2.bg-histologia';
const SUBJECT2 = '.subjinterm2.bg-chemistry';
const TITLE1 = '.subjinterm2.bg-histologia > a:nth-child(2) > div'; 
const TITLE2 = '.subjinterm2.bg-chemistry > a:nth-child(2) > div'; 
class SecondSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
  }
  static checkTitlesOnThePage() {
    this.checkElementVisible(TITLE1);
    this.checkElementVisible(TITLE2);
  }

  static checkTitleValuesOnThePage() {
    cy.get(TITLE1).should(($title) => {
      expect($title.text()).equal('ჰისტოლოგია');
    });
    cy.get(TITLE2).should(($title) => {
      expect($title.text()).equal('სამედიცინო ქიმია II');
    });
  }

  static openSubjectOne() {
    this.checkElementVisible(SUBJECT1).click();
  }

  static openSubjectTwo() {
    this.checkElementVisible(SUBJECT2).click();
  }
}

export default SecondSemesterPage;
