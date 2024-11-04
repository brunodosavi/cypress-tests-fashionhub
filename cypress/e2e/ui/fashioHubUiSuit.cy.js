describe('FashionHub Test Suite', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Test Case 1: Check there is no console errors on the page load', () => {
        cy.visit('/');
        cy.on('window:before:load', (win) => {
            cy.spy(win.console, 'error').as('consoleError');
        });
        cy.get('@consoleError').should('not.be.called');
    });

    it('Test Case 3: Log in successfully with valid credentials', () => {
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
        cy.url().should('include', '/account');
        cy.contains('Welcome').should('exist');
    })
})
