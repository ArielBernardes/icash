context("Login page", () => {
    it("should sign in", () => {
        cy.visit("http://localhost:3000/login")
        cy.get('input[name="email"]').type('test@mail.com')
        cy.get('input[name="password"]').type('Ariel123#')
        cy.get('button[type="submit"]').click()
    })
})