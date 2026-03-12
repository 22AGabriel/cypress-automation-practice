describe('todoMVC Edit todo', () => { 
    let tasks = ["Comprar tomates", "Comprar cebollas", "Comprar pimientos"]

    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")   
        tasks.forEach((task) => {
            cy.addTodo(task)
        })
    })

    it('CP-08-01 - Edit a todo item', () => {
        // Edit the second task
        cy.contains(".todo-list li", tasks[1])
        .dblclick()

        // Clear the existing text and type the new text
        cy.get("li .input-container .new-todo")
        .clear()
        .type("Comprar zanahorias{enter}")

        // Verify that the task has been updated
        cy.contains(".todo-list li", "Comprar zanahorias")
    })

    it.only('CP-08-02 - Edit a todo item and cancel', () => {
        // Edit the third task
        cy.contains(".todo-list li", tasks[2])
        .dblclick()

        // Clear the existing text, type the new text and cancel the edit
        cy.get("li .input-container .new-todo")
        .clear()
        .type("Comprar zanahorias")
        .blur()

        // Verify that the task has not been updated
        cy.contains(".todo-list li", tasks[2])
    })
})