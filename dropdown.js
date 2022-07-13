const { chromium } = require(`playwright`);

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 500 }); // driver new driver
    const page = await browser.newPage(); // open Page
    await page.goto(`https://the-internet.herokuapp.com/dropdown`); // navigate To

    const dropdown = await page.$('#dropdown');

    // value
    await dropdown.selectOption({value: '1'})

    // label
    await dropdown.selectOption({label: 'Option 2'})

    // index
    await dropdown.selectOption({index: 1})

    // values inside this select
    const availableOptions = await dropdown.$$('option');

    await browser.close();
})();