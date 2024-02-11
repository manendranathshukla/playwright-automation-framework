const { Page } = require('playwright');
const BasePage = require('./BasePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    async clickTrendingTab() {
        await this.page.click('a#endpoint[href="/feed/trending"]');
    }

    async clickSubscriptionsTab() {
        await this.page.click('a#endpoint[href="/feed/subscriptions"]');
    }

    async clickLibraryTab() {
        await this.page.click('a#endpoint[href="/feed/library"]');
    }

    async clickHistoryTab() {
        await this.page.click('a#endpoint[href="/feed/history"]');
    }

    async clickYourVideosTab() {
        await this.page.click('a#endpoint[href="/feed/library"]');
    }

    // Add more methods based on the actions you want to automate on the YouTube homepage
}

module.exports = HomePage;
