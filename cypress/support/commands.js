Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');

    // Wait for the login page to load and elements to appear
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');

    // Enter credentials and submit form
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('form').submit();
});
