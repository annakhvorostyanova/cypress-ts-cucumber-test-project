export class BasePage {
  static checkElementVisible(locator) {
    return cy.get(locator).should("be.visible");
  }
}
