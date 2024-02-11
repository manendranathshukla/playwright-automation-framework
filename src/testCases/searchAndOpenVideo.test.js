const { chromium } = require('playwright');
const BasePage = require('../../src/pages/BasePage');
const HomePage = require('../../src/pages/HomePage');
const CommonUtils = require('../../src/utils/commonUtils');
const constants = require('../../src/utils/constants');

describe('Search and Open Video Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    BasePage.page = page; // Set the page instance for the BasePage and CommonUtils
    CommonUtils.page = page;
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Search for a video and open it', async () => {
    await page.goto(constants.BASE_URL);
    const homePage = new HomePage(page);

    // Perform actions on the YouTube homepage
    await homePage.searchAndSubmit(constants.SEARCH_QUERY);
    await homePage.waitForNavigation();

    // Click on the first video in the search results
    await homePage.clickVideoByIndex(1);
    await homePage.waitForNavigation();

    // Get the title of the opened video
    const videoTitle = await homePage.getVideoTitle();
    expect(videoTitle).toBeTruthy();

    // Take a screenshot
    await CommonUtils.takeScreenshot('video_page');

    // You can add more assertions or actions based on your test requirements
  });

  // Add more test cases as needed
});
