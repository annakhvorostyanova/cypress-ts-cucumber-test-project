import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm4.bg-bioqimia';
const SUBJECT2 = '.subjinterm4.bg-top';
const SUBJECT3 = '.subjinterm4.bg-fiziologia';
const SUBJECT4 = '.subjinterm4.bg-genetics'; 
const SUBJECT5 = '.subjinterm4.bg-microbiology'; 
 

class FourthSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
    this.checkElementVisible(SUBJECT5);
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
  
}

export default FourthSemesterPage;
