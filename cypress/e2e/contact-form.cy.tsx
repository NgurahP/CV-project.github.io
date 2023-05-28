describe("contact test", () => {
  it("error when all input box blank", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error-name"]').should("exist");
    cy.get('[data-cy="error-email"]').should("exist");
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Go to the success page when the form is filled and the button is clicked", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="input-name"]').type("Ngurah Putra");
    cy.get('[data-cy="input-email"]').type("ngurahputra2425@gmail.com");
    cy.get('[data-cy="input-message"]').type("Hello");
    cy.get('[data-cy="submit"]').click();
    // cy.url().should("match", /\/success$/);
    // cy.visit("https://getform.io/f/a876231f-2e8d-4159-9c0e-8522ac72ee59");
  });
});
