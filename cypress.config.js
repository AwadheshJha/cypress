const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  requestTimeout: 40000,
  responseTimeout: 40000,
  defaultCommandTimeout: 30000,
  screenshotOnRunFailure: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://demoqa.com/',
  },
})
