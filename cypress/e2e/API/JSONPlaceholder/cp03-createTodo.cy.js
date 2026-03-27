import { ENDPOINTS } from '../../../support/constants'

describe('CP03 - POST create todo', () => {
    it('should create a new todo and return the created object', () => {

        const newTodo = {
            userId: 1,
            title: 'New todo from Cypress API testing',
            completed: false
        }

        // cy.request({
        //     method: 'POST',
        //     url: ENDPOINTS.TODOS,
        //     body: newTodo
        // })
        cy.createTodos(newTodo)
        .then((response) => {
            // Status code should be 201
            expect(response.status).to.eq(201)

            // Response body should be an object
            expect(response.body).to.be.an('object')

            // Validate structure and data types
            cy.validateTodoSchema(response.body)

            // Validate returned data
            expect(response.body.userId).to.eq(newTodo.userId)
            expect(response.body.title).to.eq(newTodo.title)
            expect(response.body.completed).to.eq(newTodo.completed)

            // Validate id generated
            expect(response.body.id).to.be.greaterThan(0)
        })
    })
})

describe('CP03 - POST negative scenarios', () => {
    it('should still create todo even if userId is missing (API limitation)', () => {
        // cy.request({
        //     method:'POST',
        //     url: ENDPOINTS.TODOS,
        //     body: {
        //         title: 'Todo without userId',
        //         completed: false
        //     }
        // })
        cy.createTodos({
            title: 'Todo without userId',
            completed: false
        })
        .then((response) => {
            expect(response.status).to.eq(201)

            // Validate that userIs is missing but todo is still created
            expect(response.body.userId).to.be.undefined
        })
    })
})