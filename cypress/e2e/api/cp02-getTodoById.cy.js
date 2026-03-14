describe('CP02 - GET todo by ID', () => {
    it('should return the correct todo when requesting by ID', () => {
        const todoId = 1
        const endpoint = `https://jsonplaceholder.typicode.com/todos/${todoId}`

        cy.request('GET', endpoint)
        .then((response) => {
            //Status code should be 200
            expect(response.status).to.eq(200)

            //Response body should be and object
            expect(response.body).to.be.an('object')

            //Validate structure
            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('completed')

            //Validate returned id
            expect(response.body.id).to.eq(todoId)

            //Validate data types
            expect(response.body.userId).to.be.a('number')
            expect(response.body.id).to.be.a('number')
            expect(response.body.title).to.be.a('string')
            expect(response.body.completed).to.be.a('boolean')
        })
    })
})