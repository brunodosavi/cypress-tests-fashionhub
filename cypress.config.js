
const { defineConfig } = require("cypress");
require("dotenv").config({ path: "./env/.env.local" });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "http://localhost:4000/fashionhub/",
    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    retries: 2,
    supportFile: 'cypress/support/e2e.js',
  }
});

