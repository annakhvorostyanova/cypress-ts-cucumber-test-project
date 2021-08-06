import { BasePage } from "../BasePage";

const SUBJECT1 = '.subjinterm2.bg-histologia';
const SUBJECT2 = '.subjinterm2.bg-chemistry';

class SecondSemesterPage extends BasePage {
  static checkElementsOnThePage() {
    this.checkElementVisible(SUBJECT1);
    this.checkElementVisible(SUBJECT2);
  }

  static openSubjectOne() {
    this.checkElementVisible(SUBJECT1).click();
  }

  static openSubjectTwo() {
    this.checkElementVisible(SUBJECT2).click();
  }
}

export default SecondSemesterPage;
