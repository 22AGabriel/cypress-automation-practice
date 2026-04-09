import { updateTodo } from '../../../support/api/todos-api'

describe('CP04 - PUT update todo', () => {

    it('should successfully update a todo with valid data', () => {
        const todoId = 1

        const updatedTodo = {
            userId: 1,
            title: 'Updated todo from Cypress API testing',
            completed: true
        }

        updateTodo(todoId, updatedTodo).then((response) => {
            expect(response.status).to.eq(200)

            expect(response.body).to.include({
                id: todoId,
                title: updatedTodo.title,
                completed: updatedTodo.completed
            })
        })
    })
})

describe('CP04 - PUT negative scenarios', () => {

    it('should retunr error when updating with invalid id (string)', () => {
        updateTodo('abc', {}, {failOnStatusCode: false})
        .then((response) => {
            expect(response.status).to.eq(500)
        })
    })

    it('should return error when updating with negative id', () => {
        updateTodo(-1, {}, {failOnStatusCode: false})
        .then((response) => {
            expect(response.status).to.eq(500)
        })
    })
})