const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions:{
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Test Report',
      embeddedScreenshots: true,
      inlineAssets: true
    },
    excludeSpecPattern: ["**/practice/**"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  },
});
