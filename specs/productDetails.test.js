//Given I'm on the departament store Main Page
//When I access the product page
//Then the page should display Data Sheet, More Info and Reviews of the product

const { chromium } = require(`playwright`);



describe(`Product Page happy paths`, () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;

    beforeAll(async() => {

        browser = await chromium.launch( /*{headless: false}*/ );
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(`http://automationpractice.com/index.php?id_product=3&controller=product`)
    })

    afterAll( async() =>{

        await context.close();
        await browser.close();
    })


    it(`Validate fields displayed after acessing Product Page`, async() =>{

        //- Data Sheet
        const dataSheetTable = await page.$(`.table-data-sheet`);
        expect(await dataSheetTable.isVisible()).toBe(true);

        const compositionRowLabel = await page.$(`.table-data-sheet .odd td`);
        expect(await compositionRowLabel.innerText()).toBe("Compositions");
        const compositionRowText = await page.$("//table[@class='table-data-sheet']//td[2]")
        expect(await compositionRowText.innerText()).toBe("Cotton");

        const stylesRowLabel = await page.$(`//table[@class='table-data-sheet']//tr[2]/td`);
        expect(await stylesRowLabel.innerText()).toBe("Styles");
        const stylesRowText = await page.$("//table[@class='table-data-sheet']//tr[2]/td[2]")
        expect(await stylesRowText.innerText()).toBe("Girly");

        const propertiesRowLabel = await page.$(`//table[@class='table-data-sheet']//tr[3]/td`);
        expect(await propertiesRowLabel.innerText()).toBe("Properties");
        const propertiesRowText = await page.$("//table[@class='table-data-sheet']//tr[3]/td[2]")
        expect(await propertiesRowText.innerText()).toBe("Colorful Dress");



        //- More Info
        const moreInfoLabel = await page.$(`//h3[@class='page-product-heading'][text()='More info']`);
        expect(await moreInfoLabel.innerText()).toBe("MORE INFO");

        const moreInfoText = await page.$("//h3[@class='page-product-heading'][text()='More info']/following-sibling::div/p");
        expect(await moreInfoText.innerText()).toContain("Cool, easy, chic looks with youthful elegance");


        //- Reviews 
        const reviewLabel = await page.$(`.idTabHrefShort`);
        expect(await reviewLabel.innerText()).toBe("REVIEWS");

        const reviewsListText = await page.$('#product_comments_block_tab');
        expect(await reviewsListText.isVisible()).toBe(true);

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