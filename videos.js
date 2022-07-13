const { chromium } = require('playwright');

// https://testautomationu.applitools.com/js-playwright-tutorial/chapter8.html
// https://playwright.dev/docs/api/class-video

(async () => { // anonymous arrow function

  const browser = await chromium.launch();
  // creating a page inside context
  const context = await browser.newContext({
    recordVideo: {
      dir: "./recordings"
    }
  });

  const page = await context.newPage();
  // navigating to site
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  // click on button
  await page.click('button');
  // waiting for loading animation to appear
  await page.waitForSelector('#loading');
  // and disappear
  await page.waitForSelector('#loading', { state: 'hidden' });

  await page.waitForTimeout(100);

  // closing browser
  await browser.close(); //  must close if not video does not get saved

})(); 