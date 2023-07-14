const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: '**/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    }
  },
});
