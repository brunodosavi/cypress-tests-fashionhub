describe('Test Case 2 - Status Codes', () => {
    it('Return 200 or 30x status codes for each link', () => {
        cy.visit('/')
        cy.get('a').each(link => {
            cy.request(link.prop('href')).then((resp) => {
                expect(resp.status).to.be.oneOf([200, 301, 302])
            })
        })
    })
})
