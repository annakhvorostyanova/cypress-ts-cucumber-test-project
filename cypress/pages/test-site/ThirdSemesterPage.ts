import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm3.bg-fiziologia';
const SUBJECT2 = '.subjinterm3.bg-bioqimia';
const SUBJECT3 = '.subjinterm3.bg-anatomia';
const SUBJECT4 = '.subjinterm3.bg-histologia'; 

class ThirdSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
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
