module.exports = {
    preset: 'jest-playwright-preset',
    testMatch: ['**/tests/**/*.test.js'],
    testTimeout: 30000, // Adjust timeout as needed for your tests
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    reporters: [
      'default',
      ['jest-html-reporters', { outputPath: 'reports/test-report.html' }],
      ['jest-allure2-reporter', { resultsDir: 'allure-results' }],

    ],
    testEnvironmentOptions: {
        'jest-playwright': {
          browsers: ['chromium'],
        },
      },
  };
  