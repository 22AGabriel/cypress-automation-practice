import { ENDPOINTS } from '../../../support/constants'

describe('CP02 - GET todo by ID', () => {
    it('should return the correct todo when requesting by ID', () => {
        const todoId = 1

        cy.request('GET', `${ENDPOINTS.TODOS}/${todoId}`)
        .then((response) => {
            //Status code should be 200
            expect(response.status).to.eq(200)

            //Response body should be and object
            expect(response.body).to.be.an('object')
          
            //Validate returned id
            expect(response.body.id).to.eq(todoId)

            //Validate structure and data types
            cy.validateTodoSchema(response.body)
        })
    })
})

describe('CP02 - GET todo by ID negative scenarios', () => {
    it('should return 404 when todo does not exist', () => { 
        const invalidId = [9999, 'abc', -1]

        invalidId.forEach((id) => {
            cy.request({
            method: 'GET',
            url: `${ENDPOINTS.TODOS}/${id}`,
            failOnStatusCode: false
            }).then((response) => {
            expect(response.status).to.eq(404)

            expect(response.body).to.be.deep.equal({})
            })
        })
    })
})