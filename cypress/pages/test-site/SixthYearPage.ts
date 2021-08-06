import { BasePage } from '../BasePage';

const SIXTH_SECTION = '.subjinterm11-12';

class SixthYearPage extends BasePage {
    static checkElementsVisibility(){
        this.checkElementVisible(SIXTH_SECTION).should('be.visible')
    }
}

export default SixthYearPage;