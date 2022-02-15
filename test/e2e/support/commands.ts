Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("http://localhost:3000/login");

  cy.get("#email").type(email);

  cy.get("#password").type(password);

  cy.get("#login").click();
});
