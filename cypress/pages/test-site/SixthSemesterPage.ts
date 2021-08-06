import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm6:nth-child(24)';
const SUBJECT2 = '.subjinterm6:nth-child(25)'; 
const SUBJECT3 = '.subjinterm6.bg-pathphysiology';
const SUBJECT4 = '.subjinterm6:nth-child(27)'; 
const SUBJECT5 = '.subjinterm6:nth-child(28)'; 
const SUBJECT6 = '.subjinterm6.bg-higiene'; 

 

class SixthSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
    this.checkElementVisible(SUBJECT5);
    this.checkElementVisible(SUBJECT6);
    
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

}

export default SixthSemesterPage;
