const { chromium } = require(`playwright`);
const ProductPage = require('../pages/productPage.js');


describe(`Product Page happy paths`, () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;

    let productPage = null;

    beforeAll(async() => {

        browser = await chromium.launch( {headless: false} );
        context = await browser.newContext();
        page = await context.newPage();

        productPage = new ProductPage(page);
       await productPage.navigateToProductPage();
    })

    afterAll( async() =>{

        await context.close();
        await browser.close();
    })


    //Given I'm on the departament store Main Page
    //When I access the product page
    //Then the page should display Data Sheet, More Info and Reviews of the product
    it(`Validate fields displayed after acessing Product Page`, async() =>{

        //- Data Sheet
        expect(await productPage.isVisibleDataSheetTable()).toBe(true);
        expect(await productPage.returnCompositionRowLabel()).toBe("Compositions");
        expect(await productPage.returnCompositionRowText()).toBe("Cotton");
        expect(await productPage.returnStylesRowLabelText()).toBe("Styles");
        expect(await productPage.returnStylesRowText()).toBe("Girly");
        expect(await productPage.returnPropertiesRowLabelText()).toBe("Properties");
        expect(await productPage.returnPropertiesRowText()).toBe("Colorful Dress");

        //- More Info
        expect(await productPage.returnMoreInfoLabelText()).toBe("MORE INFO");
        expect(await productPage.returnMoreInfoText()).toContain("Cool, easy, chic looks with youthful elegance");

        //- Reviews 
        expect(await productPage.returnReviewLabelText()).toBe("REVIEWS");
        expect(await productPage.isVisibleReviewsListText()).toBe(true);
    })

})



//Given I'm on the Product Page
//When I share my product on the social media
//Then the social media websites should be opened

//Given I'm on the Product Page
//When I update the Quantity 
//And Add to card
//Then the cart items and amount should be updated 

//Given I'm on the Product Page non-signed-in
//When I add the product to my wishlist
//Then an alert should be displayed requesting the user to be signed in to perform Wishlist actions 

//Given I'm on the Product Page
//When I change the product color
//Then the Product`s image should be updated

//Functional testing

//Non functional testing

//Accessibility