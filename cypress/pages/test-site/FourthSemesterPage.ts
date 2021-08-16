import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm4.bg-bioqimia';
const SUBJECT2 = '.subjinterm4.bg-top';
const SUBJECT3 = '.subjinterm4.bg-fiziologia';
const SUBJECT4 = '.subjinterm4.bg-genetics'; 
const SUBJECT5 = '.subjinterm4.bg-microbiology'; 
const TITLE1 = '.subjects.subjinterm4.bg-bioqimia > a:nth-child(2) > div'; 
const TITLE2 = '.subjects.subjinterm4.bg-top > a:nth-child(2) > div'; 
const TITLE3 = '.subjects.subjinterm4.bg-fiziologia > a:nth-child(2) > div'; 
const TITLE4 = '.subjinterm4.bg-genetics > a:nth-child(2) > div'; 
const TITLE5 = '.subjects.subjinterm4.bg-microbiology > a:nth-child(2) > div'; 

class FourthSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
    this.checkElementVisible(SUBJECT5);
  }

  static checkTitlesOnThePage() {
    this.checkElementVisible(TITLE1);
    this.checkElementVisible(TITLE2);
    this.checkElementVisible(TITLE3);
    this.checkElementVisible(TITLE4);
    this.checkElementVisible(TITLE5);
  }

  static checkTitleValuesOnThePage() {
    cy.get(TITLE1).should(($title) => {
      expect($title.text()).equal('ბიოქიმია-ნესტანის მოცემული ');
    });
    cy.get(TITLE2).should(($title) => {
      expect($title.text()).equal('ტოპანატომია');
    });
    cy.get(TITLE3).should(($title) => {
      expect($title.text()).equal('ფიზიოლოგია II');
    });
    cy.get(TITLE4).should(($title) => {
      expect($title.text()).equal('გენეტიკა II');
    });
    cy.get(TITLE5).should(($title) => {
      expect($title.text()).equal('მიკრობიოლოგია');
    });
  }

  static openSubjectOne() {
    this.checkElementVisible(TITLE1).click();
  }
  static openSubjectTwo() {
    this.checkElementVisible(TITLE2).click();
  }
  static openSubjectThree() {
    this.checkElementVisible(TITLE3).click();
  } 
  static openSubjectFour() {
    this.checkElementVisible(TITLE4).click();
  }
  static openSubjectFive() {
    this.checkElementVisible(TITLE5).click();
  }
}

export default FourthSemesterPage;
