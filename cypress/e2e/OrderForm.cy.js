describe('template spec', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:5173/OrderForm")
  })
  it("all correct", () => {
    cy.get(`input[type="radio"]`).eq(0).check();
    cy.get(`select[id="dropdown"]`).select("Thin")
    for(let i=0;i<4;i++){
      cy.get(`input[type="checkbox"]`).eq(i).check();
    }
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`button[type="submit"]`).should("be.visible");
    cy.get(`button[type="submit"]`).click();
    cy.contains("TEBRİKLER!")
  })
  it("all unselected", () => {
    cy.get(`button[type="submit"]`).should("not.exist");
  })
  it("all correct,selection order different", () => {
    cy.get(`input[type="checkbox"]`).eq(0).check();
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`select[id="dropdown"]`).select("Thin")
    cy.get(`input[type="checkbox"]`).eq(1).check();
    cy.get(`input[type="checkbox"]`).eq(2).check();
    cy.get(`input[type="checkbox"]`).eq(3).check();
    cy.get(`input[type="radio"]`).eq(0).check();
    cy.get(`button[type="submit"]`).should("be.visible");
    cy.get(`button[type="submit"]`).click();
    cy.contains("TEBRİKLER!")
  })
  it("more than 10 checkbox, others correct", () => {
    cy.get(`input[type="radio"]`).eq(0).check();
    cy.get(`select[id="dropdown"]`).select("Thin")
    for(let i=0;i<12;i++){
      cy.get(`input[type="checkbox"]`).eq(i).check();
    }
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`button[type="submit"]`).should("not.exist");
  })
})