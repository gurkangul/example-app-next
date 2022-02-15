describe("Rent", () => {
  beforeEach(() => {
    cy.login("test@test.com", "test");
  });
  it("should navigate to the rent page", () => {
    // Start from the index page
    // beforeEach(() => {
    //   cy.login("test@test.com", "test");
    // });
    // cy.login("test@test.com", "test");
    // cy.url().should("contain", "http://localhost:3000/");
    cy.get("#rent-1").click();
    cy.url().should("contain", "http://localhost:3000/rent");
    cy.get("[aria-label='credit-card']").type("5890040000000016");
    cy.get("[aria-label='credit-card-date']").type("12/20");
    cy.get("[aria-label='credit-card-cvc']").type("123");
    cy.get("[aria-label='credit-card-owner-name']").type("test");
    cy.wait(500);
    cy.get("#btn_pay").click();
  });
});
