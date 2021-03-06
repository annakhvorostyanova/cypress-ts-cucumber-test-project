import { BasePage } from "../BasePage";


const SUBJECT1 = '.subjinterm11-12.bg-gynaecology';
const SUBJECT2 = '.subjinterm11-12.bg-therapy';
const SUBJECT3 = '.subjinterm11-12.bg-therapy';
const SUBJECT4 = '.subjinterm11-12.bg-surgery';
const SUBJECT5 = '.subjinterm11-12.bg-pediatry'; 
const SUBJECT6 = '.subjinterm11-12.bg-kurortologia';
const SUBJECT7 = '.subjinterm11-12.bg-childinfective';


class SixthYearPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
    this.checkElementVisible(SUBJECT5);
    this.checkElementVisible(SUBJECT6);
    this.checkElementVisible(SUBJECT7);
 
   
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
 
}


export default SixthYearPage;
