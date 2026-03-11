describe(("Marcar tareas como no completadas"),  () => {
    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")
    })
    
    it('CP-05-01 - Marcar una tarea como no completada', () => {
        
        // Crear tarea
        const task = "Comprar tomates"
        cy.addTodo(task)
        
        // Marcar como completada
        cy.get(".filters").contains("All").click()
        cy.get(".toggle")
        .check()   

        // Verificar que la tarea esté marcada como completada
        cy.contains(".todo-list li", task)
        .should("have.class", "completed")
        
        // Marcar como no completada
        cy.get(".toggle")
        .uncheck()  

        // Verificar que la tarea esté marcada como no completada
        cy.contains(".todo-list li", task)
        .should("not.have.class", "completed")
    })

    it("CP-05-02 - Marcar una tarea que no es el primer item como no completada", () => {
        // Crear tareas 
        const tasks = ["Comprar tomates", "Comprar cebollas", "Comprar pimientos"]
        tasks.forEach((task) => {
            cy.addTodo(task)
        })
        cy.get(".filters").contains("All").click()

        // Marcar la segunda tarea como completada
        cy.get(".todo-list li")
        .eq(1)
        .find(".toggle")
        .check()

        // Verificar que la segunda tarea esté marcada como completada
        cy.get(".todo-list li")
        .eq(1)
        .should("have.class", "completed")

        // Marcar la segunda tarea como no completada
        cy.get(".todo-list li")
        .eq(1)
        .find(".toggle")
        .uncheck()

        // Verificar que la segunda tarea esté marcada como no completada
        cy.get(".todo-list li")
        .eq(1)
        .should("not.have.class", "completed")
    })

    it(("CP-05-03 - Marcar todas las tareas como no completadas"),() => {
        // Crear tareas 
        const tasks = ["Comprar tomates", "Comprar cebollas", "Comprar pimientos"]
        tasks.forEach((task) => {
            cy.addTodo(task)
        })
        cy.get(".filters").contains("All").click()

        cy.get(".toggle-all-container input").click()

        // Verificar que todas las tareas estén marcadas como completadas
        cy.get(".todo-list li")
        .should("not.have.class", "uncompleted")

        // Marcar todas las tareas como no completadas
        cy.get(".toggle-all-container input").click()  

        // Verificar que todas las tareas estén marcadas como no completadas
        cy.get(".todo-list li")
        .should("not.have.class", "completed")
    })
})