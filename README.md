# FashionHub test with Cypress

### Project Overview

This project provides an automated test suite for the FashionHub website using **Cypress**. The suite supports cross-environment testing, including **local**, **staging**, and **production** environments.

### Prerequisites

- **Node.js** (version 12 or higher)
- **Docker** (if running tests locally)

### Project Structure
```plaintext
CYPRESS-FASHIONHUB
│
├── cypress
│   ├── downloads
│   │   └── pullRequests.csv
│   ├── e2e
│   │   └── tests
│   │       └── fashionHubUiSuit.cy.js
│   ├── fixtures
│   ├── screenshots
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── tasks
│           └── commonTasks.js
│
├── env
│   ├── .env.local
│   ├── .env.production
│   └── .env.staging
│
├── .gitignore
├── cypress.config.js
├── cypress.production.config.js
├── cypress.staging.config.js
├── package.json
└── README.md
```


### Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine:

```bash
git clone https://github.com/brunodosavi/cypress-tests-fashionhub.git
cd cypress-tests-fashionhub
```

### 2. Install Dependencies
Install the necessary packages by running:

```bash
npm install
```

### 3. Environment Configuration
Environment configurations are set up in the `/cypress.config.js` files. These files define the `baseUrl` for each environment:

*   **`cypress.config.js`** – For local testing
    
*   **`cypress.config.staging.js`** – For the staging environment
    
*   **`cypress.config.production.js`** – For the production environment
    
In the root of the project, under env folder, create `.env` files for each environment, as You can see bellow.

Local  `.env.local:`
```bash
CYPRESS_USERNAME=your_username_here
CYPRESS_PASSWORD=your_password_here
CYPRESS_PR_API=your_api_endpoint_here
```

Staging  `.env.staging:`
```bash
CYPRESS_USERNAME=your_username_here
CYPRESS_PASSWORD=your_password_here
CYPRESS_PR_API=your_api_endpoint_here
```

Production  `.env.production:`
```bash
CYPRESS_USERNAME=your_username_here
CYPRESS_PASSWORD=your_password_here
CYPRESS_PR_API=your_api_endpoint_here
```

Each configuration file is used based on the environment specified in the command line, with a fallback to the `local` environment if no argument is provided.

## Running Tests

### 1. Opening the Cypress Test Runner
To interactively open the Cypress test runner, run:

```bash
npx cypress open
```

This command allows you to select and run tests manually in the Cypress interface.


### 2. Running Tests in Different Environments
To execute tests in different environments, use the following commands. These commands pass environment variables to Cypress, allowing it to pick the appropriate configuration file.

**Running tests in headless mode**

Local Environment
```bash
npm run cy:local
```
Staging Environment
```bash
npm run cy:staging
```
Production Environment
```bash
npm run cy:prod
```

**To open the Cypress test runner in a specific environment, use the following commands:**

Local Environment
```bash
npx cypress open --config-file cypress.local.config.js
```
Staging Environment
```bash
npx cypress open --config-file cypress.staging.config.js
```
Production Environment
```bash
npx cypress open --config-file cypress.production.config.js
```

## Output
After running the test suite, a CSV file named `pullRequests.csv` will be generated in the `cypress/downloads/` directory. This file lists the open pull requests with columns for the **PR name**, **creation date**, and **author**.

## Test Case Summary
* **Test Case 1** - Check there is no console errors on the page load.

* **Test Case 2** - Validate status codes for all internal links.

* **Test Case 3** - Log in successfully with valid credentials.

* **Test Case 4** - List open pull requests in CSV file from GitHub.


## File and Code Structure
The code is organized to support ease of maintenance, scalability, and configurability, ensuring production-level quality in testing.

* **Test Cases:** Organized within `/cypress/e2e/fashionHub.cy.js`.

* **Environment Configurations:** Found in `/cypress/config` for each environment.

* **Main Configuration:** `/cypress.config.js` handles environment selection, ensuring flexibility by prioritizing command-line arguments and falling back to defaults if none are specified.

## Additional Notes
* **Retries:** The configuration includes automatic retries for each test to account for transient issues.

* **Error Logging:** Test cases include comprehensive error handling, capturing console errors and verifying HTTP status codes to ensure site reliability.

To contribute or further customize this setup, feel free to extend the configuration files or add new test cases under `/cypress/e2e`.
