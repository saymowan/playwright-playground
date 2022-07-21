// https://playwright.dev/docs/pom
const pageBase = require('../utils/pageBase.js');
class ProductPage extends pageBase {

    //locators on constructor
    constructor(page){
        // calling the parent class BasePage constructor - inheritance
        super(page);

        //selectors
        this.loggedUser = '.logged-user-name';
        this.balances = '.balance-value';

        //datasheet
        this.dataSheetTable = '.table-data-sheet';
        this.compositionRowLabel = '.table-data-sheet .odd td';
        this.compositionRowText = "//table[@class='table-data-sheet']//td[2]";

        //styles
        this.stylesRowLabel = `//table[@class='table-data-sheet']//tr[2]/td`;
        this.stylesRowText = "//table[@class='table-data-sheet']//tr[2]/td[2]";

        //properties
        this.propertiesRowLabel = `//table[@class='table-data-sheet']//tr[3]/td`;
        this.propertiesRowText = "//table[@class='table-data-sheet']//tr[3]/td[2]";

        //more info
        this.moreInfoLabel = `//h3[@class='page-product-heading'][text()='More info']`;
        this.moreInfoText = "//h3[@class='page-product-heading'][text()='More info']/following-sibling::div/p";

        //reviews
        this.reviewLabel = `.idTabHrefShort`;
        this.reviewsListText = '#product_comments_block_tab';
    }


    //datasheet
    async isVisibleDataSheetTable(){
        return await (await this.page.$(this.dataSheetTable)).isVisible();
    }

    async returnCompositionRowLabel(){
        return await (await this.page.$(this.compositionRowLabel)).innerText();
    }

    async returnCompositionRowText(){
        return await(await this.page.$(this.compositionRowText)).innerText();
    }

    async returnStylesRowLabelText(){
        return await (await this.page.$(this.stylesRowLabel)).innerText();
    }

    async returnStylesRowText(){
        return await(await this.page.$(this.stylesRowText)).innerText();
    }

    async returnPropertiesRowLabelText(){
        return await(await this.page.$(this.propertiesRowLabel)).innerText();
    }

    async returnPropertiesRowText(){
        return await(await this.page.$(this.propertiesRowText)).innerText();
    }
    

    //moreinfo

    async returnMoreInfoLabelText(){
        return await(await this.page.$(this.moreInfoLabel)).innerText();
    }

    async returnMoreInfoText(){
        return await(await this.page.$(this.moreInfoText)).innerText();
    }


    //review

    async returnReviewLabelText(){
        return await(await this.page.$(this.reviewLabel)).innerText();
    }

    async isVisibleReviewsListText(){
        return await(await this.page.$(this.reviewsListText)).isVisible();
    }


    async navigate(){
        await super.navigate('app.html'); 
    }
}
module.exports = ProductPage;