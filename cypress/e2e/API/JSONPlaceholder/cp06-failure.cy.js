import { ENDPOINTS } from '../../../support/constants'

describe('CP06 - Failure Case', () => {

    it('CP-06 should fail when validating incorrect title', () => {
        cy.request({
            method: 'GET',
            url: `${ENDPOINTS.TODOS}/1`
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            
            expect(response.body).to.have.property('title')
            
            // Fail the test by asserting an incorrect title
            expect(response.body.title).to.eq('This title is incorrect')
        })
    })
})