const endpoint = `https://jsonplaceholder.typicode.com/todos`

describe('CP04 - PUT update todo', () => {

    it('should update a todo and return the updated object', () => {
        const todoId = 1

        const updatedTodo = {
            id: todoId,
            userId: 1,
            title: 'Updated todo from Cypress API testing',
            completed: true
        }

        cy.request({
            method: 'PUT',
            url: `${endpoint}/${todoId}`,
            body: updatedTodo
        })
        .then((response) => {
            expect(response.status).to.eq(200)

            expect(response.body).to.be.an('object')

            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('completed')

            // Validate id reamins the same
            expect(response.body.id).to.eq(todoId)

            // Validate returned values match the updated data
            expect(response.body.title).to.eq(updatedTodo.title)
            expect(response.body.completed).to.eq(updatedTodo.completed)

            // Validate data types
            expect(response.body.userId).to.be.a('number')
            expect(response.body.id).to.be.a('number')
            expect(response.body.title).to.be.a('string')
            expect(response.body.completed).to.be.a('boolean')
        })
    })
})

describe('CP04 - PUT negative scenarios', () => {
    it('should handle update with invalid IDs', () => {
        const invalidId = [9999, 'abc', -1]

        invalidId.forEach((id) => {
            cy.request({
                method: 'PUT',
                url: `${endpoint}/${id}`,
                failOnStatusCode: false,
                body: {
                    userId: 1,
                    title: 'This should not work',
                    completed: false
                }
            }).then((response) => {
                expect(response.status).to.eq(500) // JSONPlaceholder returns 500 for invalid PUT requests
            })
        })
    })
})