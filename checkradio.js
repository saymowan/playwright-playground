const { firefox } = require(`playwright`);

( async() => {
    //function code
    const browser = await firefox.launch({headless: false, slowMo: 100 }); // driver new driver
    const page = await browser.newPage(); // open Page
    await page.goto(`https://www.w3schools.com/howto/howto_css_custom_checkbox.asp`); // navigate To

    //check the second checkbox
    const checks = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)');

    await checks[1].check();  
    await checks[0].uncheck();


    await browser.close();
})();