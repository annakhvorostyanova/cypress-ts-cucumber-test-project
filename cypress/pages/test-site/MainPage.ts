import { BasePage } from "../BasePage";

const SIXTH_YEAR = '.course6';

class MainPage extends BasePage {
  static visit() {
    cy.visit('/');
  }

  static checkElementsOnThePage() {
    this.checkElementVisible(SIXTH_YEAR);
  }

  static openSixthCourse() {
    this.checkElementVisible(SIXTH_YEAR).click();
  }
}

export default MainPage;
