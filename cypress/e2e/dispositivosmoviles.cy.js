const devices = [
    {viewport: "ipad-2", type: "tablet"},
    {viewport: [1280, 720], type: "desktop"},
    {viewport: [375, 667], type: "mobile"},
]

describe("Dispositivos Móviles", () => {
    // it("Usando el viewport", () => {
        //     cy.viewport(1280, 720)
        //     cy.visit("https://es.react.dev/")
        //     cy.contains("Aprende").should("be.visible")
        // })
        
        // it("Usando el viewport", () => {
    //     cy.viewport(375, 667)
    //     cy.visit("https://es.react.dev/")
    //     cy.contains("Aprende").should("not.be.visible")
    // })
    
    // it("Usando el viewport movil preset", () => {
        //     cy.viewport("samsung-s10")
        //     cy.visit("https://es.react.dev/")
        //     cy.contains("Aprende").should("not.be.visible")
        // })
        
    devices.forEach((device) => {
        it(`Prueba con el viewport ${device.viewport}`, () => {
            if(Array.isArray(device.viewport)){
                cy.viewport(device.viewport[0], device.viewport[1])
            } else {
                cy.viewport(device.viewport)
            }

            cy.visit("https://es.react.dev/")
            
            if(device.type === "desktop"){
                cy.contains("Aprende").should("be.visible")
            } else {
                cy.contains("Aprende").should("not.be.visible")
            } 
        })
    })
})