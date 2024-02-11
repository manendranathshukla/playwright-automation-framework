class CommonUtils {
    static async waitForTimeout(ms) {
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    static async scrollToElement(selector) {
        await this.page.$eval(selector, element => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    static async takeScreenshot(fileName) {
        await this.page.screenshot({ path: `screenshots/${fileName}.png` });
    }

    // Add more utility functions as needed
}

module.exports = CommonUtils;
