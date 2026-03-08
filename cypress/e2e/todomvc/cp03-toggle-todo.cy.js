describe("Marcar como completado",  () => {
     beforeEach(() => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")
    })

    it('CP-03 - Marcar una tarea como completada', () => {
        const task = "Comprar tomates"
  
        cy.addTodo(task)
        
        cy.get(".toggle")
        .check()
        
        cy.contains("All").click()

        cy.contains(".todo-list li", task)
        .should("have.class", "completed")
    })
})