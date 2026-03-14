describe('CP01 - GET todos', () => {

    it('should return a valid list of todos)', () => {
        const endpoint = 'https://jsonplaceholder.typicode.com/todos'

        cy.request('GET', endpoint)
        .then((response) => {
            //Status code should be 200
            expect(response.status).to.eq(200)

            //Response body structure should be an array
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.greaterThan(0)

            //Validate first todo object structure
            const todo = response.body[0]

            expect(todo).to.have.property('userId')
            expect(todo).to.have.property('id')
            expect(todo).to.have.property('title')
            expect(todo).to.have.property('completed')

            //Validate data types
            expect(todo.userId).to.be.a('number')
            expect(todo.id).to.be.a('number')
            expect(todo.title).to.be.a('string')
            expect(todo.completed).to.be.a('boolean')
        })
    })
})