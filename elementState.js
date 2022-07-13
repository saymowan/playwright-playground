const { chromium } = require(`playwright`);

//https://playwright.dev/docs/actionability
//https://playwright.dev/docs/api/class-elementhandle#element-handle-wait-for-element-state

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100 }); // driver new driver
    const page = await browser.newPage(); // open Page
    await page.goto(`https://demoqa.com/automation-practice-form`); // navigate To

    //auto: attached (DOM), visible, stable, editable

    //print element state
    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$(`submit`);

    // print the element state
    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());

    await browser.close();
})();