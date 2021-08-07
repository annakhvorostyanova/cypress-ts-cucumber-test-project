import { BasePage } from "../BasePage";


const SUBJECT1 = '.subjinterm7-8.bg-jandacva';
const SUBJECT2 = '.subjinterm7-8.bg-surgery';
const SUBJECT3 = '.subjinterm7-8.bg-therapy';
const SUBJECT4 = '.subjinterm7-8.bg-forensic';
const SUBJECT5 = '.subjinterm7-8.bg-forensic'; 
const SUBJECT6 = '.subjinterm7-8.bg-infective';

class FifthYearPage extends BasePage {
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


export default FifthYearPage;
