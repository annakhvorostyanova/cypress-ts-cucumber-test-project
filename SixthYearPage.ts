import { BasePage } from "../BasePage";

const SIXTH_YEAR = '.course6';

class SixthYearPage extends BasePage{
  checkElementsOnSixthYearPage() {
    throw new Error('Method not implemented.');
  }
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
export const sixthYearPage = new SixthYearPage();
