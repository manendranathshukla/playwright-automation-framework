# Playwright Automation Framework with Cucumber

This is a sample Playwright automation framework integrated with Cucumber for testing YouTube functionality. The framework includes Jest for test execution and Allure for reporting.

## Setup

### Prerequisites

- Node.js installed
- Playwright dependencies: `npm install playwright`

### Installation

```bash
npm install
```


### How To Run 

```bash
npm test -- tests/youtube.test.js
```

### Generate Allure Report 

```bash
npx allure generate --clean
npx allure open
```


### Cucumber Is Integrated 

This review node version >= 18 or 20
 
To Start with Cucumber : change the code to this in package.json

```bash
"scripts": {
  "test:cucumber": "cucumber-js"
}
```

Then run using this:
```bash
npm run test:cucumber
```