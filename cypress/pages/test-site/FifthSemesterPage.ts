import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm5.bg-top';
const SUBJECT2 = '.subjinterm5.bg-pathanatomy';
const SUBJECT3 = '.subjinterm5.bg-immunology';
const SUBJECT4 = '.subjinterm5:nth-child(19)'; 
const SUBJECT5 = '.subjinterm5:nth-child(20)'; 
const SUBJECT6 = '.subjinterm5:nth-child(21)'; 
const SUBJECT7 = '.subjinterm5.bg-pathphysiology'; 
const SUBJECT8 = '.subjinterm5:nth-child(13)'; 
const SUBJECT9 = '.subjinterm5:nth-child(14)'; 
 
 

class FifthSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
    this.checkElementVisible(SUBJECT5);
    this.checkElementVisible(SUBJECT6);
    this.checkElementVisible(SUBJECT7);
    this.checkElementVisible(SUBJECT8);
    this.checkElementVisible(SUBJECT9);
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

  static openSubjectFive() {
    this.checkElementVisible(SUBJECT5).click();
  }

  static openSubjectSix() {
    this.checkElementVisible(SUBJECT6).click();
  }

  static openSubjectSeven() {
    this.checkElementVisible(SUBJECT7).click();
  }

  static openSubjectEight() {
    this.checkElementVisible(SUBJECT8).click();
  }

  static openSubjectNine() {
    this.checkElementVisible(SUBJECT9).click();
  }
  
}

export default FifthSemesterPage;
