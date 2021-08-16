import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm7-8.bg-pediatry';
const SUBJECT2 = '.subjinterm7-8.bg-neurology';
const SUBJECT3 = '.subjinterm7-8.bg-urology';
const SUBJECT4 = '.subjinterm7-8.bg-urology';
const SUBJECT5 = '.subjinterm7-8.bg-surgery'; 
const SUBJECT6 = '.subjinterm7-8.bg-therapy';
const SUBJECT7 = '.subjinterm7-8.bg-gynaecology';
const SUBJECT8 = '.subjinterm7-8.bg-gynaecology';
const SUBJECT9 = '.subjinterm7-8.bg-dermatology'; 

class FourthYearPage extends BasePage {
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


export default FourthYearPage;
