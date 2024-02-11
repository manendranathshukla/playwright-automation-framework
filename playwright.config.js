const { devices } = require('playwright');

module.exports = {
    projects: [
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'], channel: 'firefox' },
        },
        // You can add more configurations for other browsers or devices as needed.
    ],
};
