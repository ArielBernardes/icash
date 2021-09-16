context("Register", () => {
    it("should sign up", () => {
        cy.visit("http://localhost:3000/signup")
        cy.get('input[name="name"]').type('test123')
        cy.get('input[name="email"]').type('test123@mail.com')
        cy.get('input[name="password"]').type('Ariel123#')
        cy.get('input[name="passwordConfirm"]').type('Ariel123#')
        cy.get('button[type="submit"]').click()
    })
})