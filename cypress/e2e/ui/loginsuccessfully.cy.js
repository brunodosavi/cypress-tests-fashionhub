describe('Test Case 3 - Login', () => {
    it('should allow user to login with correct credentials', () => {
        cy.visit('/login.html')
        cy.get('input[name="username"]').type('demouser')
        cy.get('input[name="password"]').type('fashion123')
        cy.get('form').submit()
        cy.url().should('include', '/dashboard') // Adjust based on app behavior
    })
})