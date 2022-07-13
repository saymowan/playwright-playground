const { chromium } = require(`playwright`);

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.goto(`http://the-internet.herokuapp.com/forgot_password`);

    const email =  await page.$('#email');
    await email.type(`say.mon@gmail.com`, { delay: 100 })

    await browser.close();
})();