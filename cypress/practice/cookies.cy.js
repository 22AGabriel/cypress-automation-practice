describe('Cookies', () => { 
    beforeEach("Visitar página", () => {
        cy.visit("/");
        cy.clearCookies();
    })

    it("Obtener Cookies", () => {
        cy.getCookies().should("be.empty");
    });

    it("Agregar una cookie", () => {
        cy.setCookie("nombre", "Gabriel");
        cy.getCookies().should("have.length", 1)
    })

    it("Obtener una cookie en específico", () => {
        cy.setCookie("nombre", "Gabriel");
        cy.getCookie("nombre").should("have.a.property", "value", "Gabriel")
    })
 })