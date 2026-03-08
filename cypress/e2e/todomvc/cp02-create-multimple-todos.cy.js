describe("Alta de varias tareas", ()  => {

    beforeEach(() => {
        cy.visit("https://todomvc.com/examples/react/dist/#/active")
    })

    it('CP-02 - Agregar varias tareas', () => {
        const tasks = [
            "Comprar tomates",
            "Lavar el auto",
            "Pagar servicios"
        ]

        //Agregar cada tarea del array
        tasks.forEach((task) => {
            cy.get("#todo-input.new-todo")
            .type(task)
            .type("{enter}")
        })

        //Validar cantidad de tareas
        cy.get(".todo-list li")
        .should("have.length", tasks.length)

        //Validar que cada tarea existe
        tasks.forEach((task) => {
            cy.contains(".todo-list li", task)
            .should("be.visible")
        })

        //Validar contador
        cy.get(".todo-count")
        .should("contain", `${tasks.length} items`)
    })
})