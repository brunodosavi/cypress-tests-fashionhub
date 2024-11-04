
const { defineConfig } = require("cypress");
require("dotenv").config({ path: "./env/.env.staging" });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://staging-env/fashionhub/",
    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    retries: 2,
    supportFile: 'cypress/support/e2e.js',
  }
});

