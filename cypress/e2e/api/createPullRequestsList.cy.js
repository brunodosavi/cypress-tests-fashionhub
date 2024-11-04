describe('FashionHub Test Suite', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Test Case 4: List open pull requests in CSV file from GitHub', () => {
        const filePath = 'cypress/downloads/pullRequests.csv';
        cy.task('deleteFile', filePath);

        cy.request(Cypress.env('PR_API'))
            .its('body')
            .then((pulls) => {
                const csv = pulls.map((pr) => ({
                    title: pr.title,
                    created_at: pr.created_at,
                    author: pr.user.login
                }));
                cy.writeFile(filePath, csv);
            });
    });
})
