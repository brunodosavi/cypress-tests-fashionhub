
const { defineConfig } = require("cypress");
require("dotenv").config({ path: "./env/.env.production" });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://pocketaces2.github.io/fashionhub/",
    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    retries: 2,
    supportFile: 'cypress/support/e2e.js',
  }
});

