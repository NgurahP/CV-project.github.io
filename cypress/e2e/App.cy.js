describe("form submit", () => {
  beforeEach(() => {
  cy.visit("localhost:3000");
  });
  it("submit thee form", () => {
    cy.get("#text").type("test");
    cy.get("#submit").should("not.exist");
  });
});
