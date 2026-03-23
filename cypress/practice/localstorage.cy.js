describe("Localstorage", () => {
    beforeEach("Visitar página", () => {
        cy.visit("https://example.cypress.io/commands/storage")
    })

    it("LocalStorage", () => {
        cy.contains("Populate localStorage and sessionStorage").click()

        cy.reload()

        // Validar que existe
        cy.window().then((win) => {
            expect(win.localStorage.getItem("prop1")).to.exist;
        })
        
        // Limpiar LocalStorage y validar que no existe prop1
        cy.clearLocalStorage("prop1")
        cy.window().then((win) => {
            expect(win.localStorage.getItem("prop1")).to.be.null;
        })

        // Modificar valor del LocalStorage
        cy.window().then((win) => {
            win.localStorage.setItem("prop2", "green")
        })
        cy.window().then((win) => {
            expect(win.localStorage.getItem("prop2")).to.equal("green")
        })
    })

    it("Guardar Objeto en LocalStorage y editar", () => {
        const user = {
            name: "Gabriel",
            role: "QA"
        }
        
        cy.window().then((win) => {
            win.localStorage.setItem("user", JSON.stringify(user))
        })

        cy.window().then((win) => {
            const data = JSON.parse(win.localStorage.getItem("user"))

            data.role = "QA Automation"

             win.localStorage.setItem("user", JSON.stringify(data))
        })

        // Validar cambio

        cy.window().then((win) => {
            const updated = JSON.parse(win.localStorage.getItem("user"))
            expect(updated.role).to.equal("QA Automation")
        })
    })


})