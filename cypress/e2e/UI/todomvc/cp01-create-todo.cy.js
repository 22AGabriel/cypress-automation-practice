describe("Alta de tareas", ()  => {
    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")
    })

    it('CP-01 - Agregar una tarea', () => {
        const task = "Comprar tomates"

        cy.get("#todo-input.new-todo")
        .type(task)
        .type("{enter}")

        cy.contains(".todo-list li", task)
        .should("be.visible")

        cy.get("#todo-input.new-todo")
        .should("have.value", "")

        cy.get(".todo-list li")
        .should("contain", task)
    })
})