const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const HomePage = require('../../src/pages/HomePage');
const CommonUtils = require('../../src/utils/commonUtils');
const constants = require('../../src/utils/constants');

let browser;
let page;

Given('the user is on the YouTube homepage', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

When('the user searches for {string}', async (searchQuery) => {
  const homePage = new HomePage(page);
  await page.goto(constants.BASE_URL);
  await homePage.searchAndSubmit(searchQuery);
  await homePage.waitForNavigation();
});

When('the user clicks on the first video', async () => {
  const homePage = new HomePage(page);
  await homePage.clickVideoByIndex(1);
  await homePage.waitForNavigation();
});

Then('the video title should contain {string}', async (expectedKeyword) => {
  const homePage = new HomePage(page);
  const videoTitle = await homePage.getVideoTitle();
  expect(videoTitle.toLowerCase()).toContain(expectedKeyword.toLowerCase());
  await CommonUtils.takeScreenshot('video_page');
});

After(async () => {
  await browser.close();
});
