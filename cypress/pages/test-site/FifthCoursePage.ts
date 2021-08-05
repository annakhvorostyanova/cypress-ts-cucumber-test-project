import { BasePage } from "../BasePage";

const SUBJECT1 = '.bg-jandacva';
const SUBJECT2 = '.bg-surgery';
const SUBJECT3 = '.bg-therapy';
const SUBJECT4 = 'body > div:nth-child(42)';
const SUBJECT5 = 'body > div:nth-child(43)';
const SUBJECT6 = '.bg-infective';

class FifthCoursePage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
    this.checkElementVisible(SUBJECT3);
    this.checkElementVisible(SUBJECT4);
    this.checkElementVisible(SUBJECT5);
    this.checkElementVisible(SUBJECT6);
  }

  static openSujectOne() {
    this.checkElementVisible(SUBJECT1).click();
  }
  
  static openSujectTwo() {
    this.checkElementVisible(SUBJECT2).click();
  }
  
  static openSujectThree() {
    this.checkElementVisible(SUBJECT3).click();
  }
  
  static openSujectFour() {
    this.checkElementVisible(SUBJECT4).click();
  }
  
  static openSujectFive() {
    this.checkElementVisible(SUBJECT5).click();
  }
  
  static openSujectSix() {
    this.checkElementVisible(SUBJECT6).click();
  }
}

export default FifthCoursePage;
