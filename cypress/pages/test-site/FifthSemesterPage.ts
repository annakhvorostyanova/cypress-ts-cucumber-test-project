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
const TITLE1 = '.subjinterm5.bg-top > a:nth-child(2) > div';
const TITLE2 = '.subjinterm5.bg-pathanatomy > a:nth-child(2) > div';
const TITLE3 = '.subjinterm5.bg-immunology > a:nth-child(2) > div';
const TITLE4 = '.subjinterm5:nth-child(19) > a:nth-child(2) > div'; 
const TITLE5 = '.subjinterm5:nth-child(20) > a:nth-child(2) > div'; 
const TITLE6 = '.subjinterm5:nth-child(21) > a:nth-child(2) > div'; 
const TITLE7 = '.subjinterm5.subjects.subjinterm5.bg-pathphysiology > a:nth-child(2) > div'; 
const TITLE8 = '.subjinterm5:nth-child(13) > a:nth-child(2) > div'; 
const TITLE9 = '.subjinterm5:nth-child(14) > a:nth-child(2) > div'; 
 

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

  static checkTitlesOnThePage() {
    this.checkElementVisible(TITLE1);
    this.checkElementVisible(TITLE2);
    this.checkElementVisible(TITLE3);
    this.checkElementVisible(TITLE4);
    this.checkElementVisible(TITLE5);
    this.checkElementVisible(TITLE6);
    this.checkElementVisible(TITLE7);
    this.checkElementVisible(TITLE8);
    this.checkElementVisible(TITLE9);
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

  static openSubjectSix() {
    this.checkElementVisible(TITLE6).click();
  }

  static openSubjectSeven() {
    this.checkElementVisible(TITLE7).click();
  }

  static openSubjectEight() {
    this.checkElementVisible(TITLE8).click();
  }

  static openSubjectNine() {
    this.checkElementVisible(TITLE9).click();
  }
  
}

export default FifthSemesterPage;
