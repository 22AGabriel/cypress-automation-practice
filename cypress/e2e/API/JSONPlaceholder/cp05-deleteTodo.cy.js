import { ENDPOINTS } from '../../../support/constants'

describe('CP05 - DELETE todo', () => {

    it('should delete a todo and return an empty object', () => {
        const todoId = 1

        cy.request({
            method: 'DELETE',
            url: `${ENDPOINTS.TODOS}/${todoId}`
        })
        .then((response) => {
            // Status code should be 200
            expect(response.status).to.eq(200)

            // Response body should be an empty object
            expect(response.body).to.be.an('object')

            // JSONPlaceholder returns an empty object after delete
            expect(response.body).to.deep.equal({})
        })
    })
})