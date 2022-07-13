const { chromium, devices } = require(`playwright`);
const iPhone = devices[`iPhone 11`];

//https://playwright.dev/docs/emulation#devices

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 300 }); // driver new driver
    const context  = browser.newContext({
        ...iPhone,
        permissions:[`geolocation`],
        geolocation: { latitude: 19.432608, longitude: -99.133209 },
        locale: `fr-FR`
    });

    const page = await (await context).newPage();
    await page.goto(`http://google.com`); // navigate To
    await page.waitForTimeout(5000);
    await browser.close();
})();