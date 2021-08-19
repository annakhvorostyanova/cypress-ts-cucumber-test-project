import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm2.bg-histologia';
const SUBJECT2 = '.subjinterm2.bg-chemistry';
const TITLE1 = '.subjinterm2.bg-histologia > a:nth-child(2) > div'; 
const TITLE2 = '.subjinterm2.bg-chemistry > a:nth-child(2) > div'; 
const CORRECT_ANSWER = '#anstext3'; 
const INCORRECT_ANSWER1 = '#anstext1'; 
const INCORRECT_ANSWER2 = '#anstext2'; 
const INCORRECT_ANSWER4 = '#anstext4'; 
const CORRECT_IMG = '#imagecorrect'; 
const INCORRECT_IMG = '#imageincorrect'; 

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

  static checkCorrectAnswer() {
    this.checkElementVisible(CORRECT_ANSWER).click({force: true});
    this.checkElementVisible(CORRECT_IMG);
  }

  static checkInCorrectAnswer() {
    this.checkElementVisible(INCORRECT_ANSWER1).click({force: true});
    this.checkElementVisible(INCORRECT_IMG);
    this.checkElementVisible(INCORRECT_ANSWER2).click({force: true});
    this.checkElementVisible(INCORRECT_IMG);
    this.checkElementVisible(INCORRECT_ANSWER4).click({force: true});
    this.checkElementVisible(INCORRECT_IMG);
  }

  static openSubjectOne() {
    this.checkElementVisible(SUBJECT1).click();
  }

  static openSubjectTwo() {
    this.checkElementVisible(SUBJECT2).click();
  }
}

export default SecondSemesterPage;
