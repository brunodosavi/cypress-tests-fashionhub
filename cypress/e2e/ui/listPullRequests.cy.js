describe('Test Case 4 - GitHub PRs', () => {
    it('List and output PRs in CSV format', () => {
        cy.request('https://api.github.com/repos/appwrite/appwrite/pulls')
            .then((response) => {
                response.body.forEach(pr => {
                    console.log(`${pr.title}, ${pr.created_at}, ${pr.user.login}`)
                })
            })
    })
})
