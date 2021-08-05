let sixthSection = '.course6'
import { BasePage } from '../BasePage';
class SixthYearPage extends BasePage {
    static checkElementsVisibility(){
        this.checkElementVisible('.subjinterm11-12').should('be.visible')

    }
}

export default SixthYearPage;
