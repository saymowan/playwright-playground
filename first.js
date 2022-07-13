const { chromium } = require(`playwright`);

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100 }); // driver new driver
    const page = await browser.newPage(); // open Page
    await page.goto(`http://google.com`); // navigate To
    await browser.close();
})();