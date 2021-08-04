import { BasePage } from "../BasePage";

const TERM1 = '.term1';
const TERM2 = '.term2';
const TERM3 = '.term3';
const TERM4 = '.term4';
const TERM5 = '.term5';
const TERM6 = '.term6';
const TERM7_8 = '.term7-8';
const TERM9_10 = '.term9-10';
const TERM11_12 = '.term11-12';

class MainPage extends BasePage {
  static visit() {
    cy.visit('/');
  }

  static checkElementsOnThePage() {
    this.checkElementVisible(TERM1);
    this.checkElementVisible(TERM2);
    this.checkElementVisible(TERM3);
    this.checkElementVisible(TERM4);
    this.checkElementVisible(TERM5);
    this.checkElementVisible(TERM6);
    this.checkElementVisible(TERM7_8);
    this.checkElementVisible(TERM9_10);
    this.checkElementVisible(TERM11_12);
  }

  static openTermOne() {
    this.checkElementVisible(TERM1).click();
  }
  
  static openTermTwo() {
    this.checkElementVisible(TERM2).click();
  }
  
  static openTermThree() {
    this.checkElementVisible(TERM3).click();
  }
  
  static openTermFour() {
    this.checkElementVisible(TERM4).click();
  }
  
  static openTermFive() {
    this.checkElementVisible(TERM5).click();
  }
  
  static openTermSix() {
    this.checkElementVisible(TERM6).click();
  }
  
  static openTermSevenEight() {
    this.checkElementVisible(TERM7_8).click();
  }
  
  static openTermNineTen() {
    this.checkElementVisible(TERM9_10).click();
  }
  
  static openTermElevenTwelve() {
    this.checkElementVisible(TERM11_12).click();
  }
}

export default MainPage;
