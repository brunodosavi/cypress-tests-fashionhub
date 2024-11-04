describe('Test Case 1 - Console Errors', () => {
    it('should not have console errors', () => {
        cy.visit('/about')
        cy.on('window:before:load', (win) => {
            cy.spy(win.console, 'error').as('consoleError')
        })
        cy.get('@consoleError').should('not.be.called')
    })
})
