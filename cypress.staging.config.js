
const { defineConfig } = require("cypress");
require("dotenv").config({ path: "./env/.env.staging" });
const commonTasks = require('./cypress/tasks/commonTasks');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', commonTasks);
    },
    baseUrl: "https://staging-env/fashionhub/",
    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
      PR_API: process.env.CYPRESS_PR_API
    },
    retries: 2,
    supportFile: 'cypress/support/e2e.js',
  }
});

