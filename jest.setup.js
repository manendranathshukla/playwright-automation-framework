const { devices } = require('playwright');

beforeAll(async () => {
    // Any setup code you want to run before all tests
});

afterAll(async () => {
    // Any teardown code you want to run after all tests
});

// You can also configure devices here if needed
global.devices = devices;
