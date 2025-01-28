describe('template spec', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:5173/OrderForm")
  })

  it("test1 : all correct", () => {
    cy.get(`[data-cy="radio-label"]`).eq(0).click();
    cy.get(`select[id="dropdown"]`).select("Thin")
    for(let i=0;i<4;i++){
      cy.get(`input[type="checkbox"]`).eq(i).check();
    }
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`button[type="submit"]`).should("be.visible");
    cy.get(`button[type="submit"]`).click();
    cy.contains("ORDER RECEIVED!")
  })

  it("test2 : all unselected", () => {
    cy.get(`button[type="submit"]`).should("not.exist");
  })

  it("test3 : more than 10 checkbox, others correct", () => {
    cy.get(`[data-cy="radio-label"]`).eq(0).click();
    cy.get(`select[id="dropdown"]`).select("Thin")
    for(let i=0;i<12;i++){
      cy.get(`input[type="checkbox"]`).eq(i).check();
    }
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`button[type="submit"]`).should("not.exist");
  })

  it("test4 : routing from main page to end", () => {
    cy.visit("http://localhost:5173/");
    cy.contains(`I'm HUNGRY`).click();
    cy.contains("Select Size");
    cy.get(`[data-cy="radio-label"]`).eq(0).click();
    cy.get(`select[id="dropdown"]`).select("Thin")
    for(let i=0;i<4;i++){
      cy.get(`input[type="checkbox"]`).eq(i).check();
    }
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`button[type="submit"]`).should("be.visible");
    cy.get(`button[type="submit"]`).click();
    cy.contains("ORDER RECEIVED!")
  })

  it("test5 : all correct,selection order variation-1", () => {
    cy.get(`input[type="checkbox"]`).eq(0).check();
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`select[id="dropdown"]`).select("Thin")
    cy.get(`input[type="checkbox"]`).eq(1).check();
    cy.get(`input[type="checkbox"]`).eq(2).check();
    cy.get(`input[type="checkbox"]`).eq(3).check();
    cy.get(`[data-cy="radio-label"]`).eq(0).click();
    cy.get(`button[type="submit"]`).should("be.visible");
    cy.get(`button[type="submit"]`).click();
    cy.contains("ORDER RECEIVED!")
  })

  it("test6 : all correct,selection order variation-2", () => {
    cy.get(`input[type="checkbox"]`).eq(2).check();
    cy.get(`input[type="checkbox"]`).eq(0).check();
    cy.get(`input[type="checkbox"]`).eq(3).check();
    cy.get(`input[name="name"]`).type("asd");
    cy.get(`input[type="checkbox"]`).eq(1).check();
    cy.get(`[data-cy="radio-label"]`).eq(0).click();
    cy.get(`select[id="dropdown"]`).select("Thin")
    cy.get(`button[type="submit"]`).should("be.visible");
    cy.get(`button[type="submit"]`).click();
    cy.contains("ORDER RECEIVED!")
  })

})