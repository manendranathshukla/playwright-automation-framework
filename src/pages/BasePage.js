const { Page } = require('playwright');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async waitForNavigation() {
        try {
          console.log('Waiting for navigation...');
          await this.page.waitForNavigation({ timeout: 60000 });
          console.log('Navigation completed.');
        } catch (error) {
            console.error('Error during navigation:', error);
            console.error('Current URL:', this.page.url()); // Log the current URL for debugging
            throw error;
        }
      }
    async navigateTo(url) {
        await this.page.goto(url);
    }

    async searchAndSubmit(query) {
        await this.page.type('input#search', query);
        await this.page.press('input#search', 'Enter');
    }

    async clickVideoByIndex(title) {
        const videoSelector = `//yt-formatted-string[text()='${title}']`;
        await this.page.click(videoSelector);
    }

    async getVideoTitle(value) {
        await this.page.waitForSelector(`//div[@id='title']//yt-formatted-string[text()='${value}']`);
        return this.page.innerText(`//div[@id='title']//yt-formatted-string[text()='${value}']`);
    }

    // async waitForNavigation() {
    //     await this.page.waitForNavigation({ timeout: 60000 });
    // }

    async closeBrowser() {
        await this.page.browser().close();
    }
}

module.exports = BasePage;
