describe('CP10 - Failure case', () => {

    it('CP-10 should fail when expecting incorrect number of todos', () => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")

        cy.get(".todo-list li").type("Task 1 {enter}")
        cy.get(".todo-list li").type("Task 2 {enter}")

        // Validate existing todos
        cy.get(".todo-list li").should("exist")

        // Fail the test by asserting an incorrect number of todos
        cy.get(".todo-list li").should("have.length", 5)
    })
})