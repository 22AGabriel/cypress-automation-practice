const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  video: true,
  screenshotOnRunFailure: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
    reportDir: 'cypress/reports/mochawesome',
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    excludeSpecPattern: ["**/practice/**"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  },
});
