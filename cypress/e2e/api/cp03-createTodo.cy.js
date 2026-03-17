const endpoint = 'https://jsonplaceholder.typicode.com/todos'

describe('CP03 - POST create todo', () => {
    it('should create a new todo and return the created object', () => {

        const newTodo = {
            userId: 1,
            title: 'New todo from Cypress API testing',
            completed: false
        }

        cy.request({
            method: 'POST',
            url: endpoint,
            body: newTodo
        })
        .then((response) => {
            // Status code should be 201
            expect(response.status).to.eq(201)

            // Response body should be an object
            expect(response.body).to.be.an('object')

            // Validate structure
            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('completed')

            // Validate returned data
            expect(response.body.userId).to.eq(newTodo.userId)
            expect(response.body.title).to.eq(newTodo.title)
            expect(response.body.completed).to.eq(newTodo.completed)

            // Validate data types
            expect(response.body.userId).to.be.a('number')
            expect(response.body.id).to.be.a('number')
            expect(response.body.title).to.be.a('string')
            expect(response.body.completed).to.be.a('boolean')

            // Validate id generated
            expect(response.body.id).to.be.greaterThan(0)
        })
    })
})

describe('CP03 - POST negative scenarios', () => {
    it('should still create todo even if userId is missing (API limitation)', () => {
        cy.request({
            method:'POST',
            url: endpoint,
            body: {
                title: 'Todo without userId',
                completed: false
            }
        }).then((response) => {
            expect(response.status).to.eq(201)

            // Validate that userIs is missing but todo is still created
            expect(response.body.userId).to.be.undefined
        })
    })
})