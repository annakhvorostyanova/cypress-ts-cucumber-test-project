import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm3.bg-fiziologia';
const SUBJECT2 = '.subjinterm3.bg-bioqimia';
const SUBJECT3 = '.subjinterm3.bg-anatomia';
const SUBJECT4 = '.subjinterm3.bg-histologia'; 
const TITLE1 = '.subjinterm3.bg-fiziologia > a:nth-child(2) > div';
const TITLE2 = '.subjinterm3.bg-bioqimia > a:nth-child(2) > div';
const TITLE3 = '.subjinterm3.bg-anatomia > a:nth-child(2) > div';
const TITLE4 = '.subjinterm3.bg-histologia > a:nth-child(2) > div';
class ThirdSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
  }
  static checkTitlesOnThePage() {
    this.checkElementVisible(TITLE1);
    this.checkElementVisible(TITLE2);
    this.checkElementVisible(TITLE3);
    this.checkElementVisible(TITLE4);
  }

  static checkTitleValuesOnThePage() {
    cy.get(TITLE1).should(($title) => {
      expect($title.text()).equal('ფიზიოლოგია');
    });
    cy.get(TITLE2).should(($title) => {
      expect($title.text()).equal('ბიოქიმია');
    });
    cy.get(TITLE3).should(($title) => {
      expect($title.text()).equal('ანატომია');
    });
    cy.get(TITLE4).should(($title) => {
      expect($title.text()).equal('ჰისტოლოგია II');
    });
  }
  
  static openSubjectOne() {
    this.checkElementVisible(SUBJECT1).click();
  }

  static openSubjectTwo() {
    this.checkElementVisible(SUBJECT2).click();
  }
  
  static openSubjectThree() {
    this.checkElementVisible(SUBJECT3).click();
  }
  static openSubjectFour() {
    this.checkElementVisible(SUBJECT4).click();
  }

}

export default ThirdSemesterPage;