describe("Prevenir tareas vacías",() => {
    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")
    })

    it('CP-04 - No permitir agregar tareas vacías', () => {
        cy.get(".new-todo")
        .type("{enter}") 

        cy.get(".todo-list li")
        .should("have.length", 0)

        cy.get(".new-todo")
        .should("have.value", "")
    })
})