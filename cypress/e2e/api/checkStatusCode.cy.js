describe('FashionHub Test Suite', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Test Case 2: Check status codes for all internal links', () => {
        cy.get('a').each((link) => {
            const href = link.prop('href');
            if (href.startsWith(Cypress.config().baseUrl) || !href.startsWith('http')) {
                cy.request(href).then((resp) => {
                    expect(resp.status).to.be.oneOf([200, 301, 302, 303, 304, 307, 308]);
                    expect(resp.status).not.to.be.within(400, 499);
                });
            }
        });
    });
})
