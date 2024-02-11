const { chromium } = require('playwright');
const BasePage = require('../src/pages/BasePage');
const HomePage = require('../src/pages/HomePage');
const CommonUtils = require('../src/utils/commonUtils');
const constants = require('../src/utils/constants');

describe('YouTube Automation Tests', () => {
  let browser;
  let page;
  beforeAll(async () => {
  try {
    console.log('Launching browser...');
    browser = await chromium.launch({ headless: false });
    console.log('Browser launched.');
    page = await browser.newPage();
    BasePage.page = page; // Set the page instance for the BasePage and CommonUtils
    CommonUtils.page = page;
  } catch (error) {
    console.error('Error during browser launch:', error);
    throw error;
  }
  });

  afterAll(async () => {
    try {
        console.log('Closing browser...');
        await browser.close();
        console.log('Browser closed.');
      } catch (error) {
        console.error('Error during browser closure:', error);
        throw error;
      }
  });

  test('Search and Open Video Test', async () => {
    try {
        console.log('Navigating to base URL...');
        await page.goto(constants.BASE_URL);
        console.log('Navigation to base URL completed.');
        
        const homePage = new HomePage(page);
  
        // Perform actions on the YouTube homepage
        console.log('Performing search and navigation...');
        await homePage.searchAndSubmit(constants.SEARCH_QUERY);
        // await homePage.waitForNavigation();
        console.log('Search and navigation completed.');
  
        // Click on the first video in the search results
        console.log('Clicking on the first video...');
        await homePage.clickVideoByIndex(constants.SEARCH_QUERY);
        // await homePage.waitForNavigation();
        console.log('Clicked on the first video.');
  
        // Get the title of the opened video
        console.log('Getting video title...');
        const videoTitle = await homePage.getVideoTitle(constants.SEARCH_QUERY);
        console.log('Video title:', videoTitle);
        expect(videoTitle.toLowerCase()).toContain('mycodeworks');
  
        // Take a screenshot
        console.log('Taking screenshot...');
        await CommonUtils.takeScreenshot('video_page');
        console.log('Screenshot taken.');
  
        // You can add more assertions or actions based on your test requirements
      } catch (error) {
        console.error('Error during test execution:', error);
        throw error;
      }

    // You can add more assertions or actions based on your test requirements
  },60000);

  // Add more test cases as needed
});
