import { ENDPOINTS } from '../../../support/constants'

describe('CP01 - GET todos', () => {

    it('should return a valid list of todos', () => {

        cy.request('GET', ENDPOINTS.TODOS)
        .then((response) => {
            //Status code should be 200
            expect(response.status).to.eq(200)

            //Response body structure should be an array
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.greaterThan(0)

            //Validate first todo object structure and data types
            const todo = response.body[0]

            cy.validateTodoSchema(todo)
        })
    })
})