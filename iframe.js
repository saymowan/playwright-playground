const { webkit } = require(`playwright`);

( async() => {
    //function code
    const browser = await webkit.launch({headless: false, slowMo: 100 }); // driver new driver
    const page = await browser.newPage(); // open Page
    await page.goto(`https://demoqa.com/frames`); // navigate To

    const frame1 = await page.frame({ url: /\/sample/}); //frameUrl
    const heading1 = await frame1.$(`h1`);
    console.log(await heading1.innerText());

    await browser.close();
})();