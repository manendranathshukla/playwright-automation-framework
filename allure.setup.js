const Allure = require('jest-allure2-reporter').Allure;

const allure = new Allure();

jest.addReporter(allure);

afterAll(async () => {
    await browser.close();
    allure.writeEnvironmentInfo({
        Browser: 'Chromium',
    });
});
