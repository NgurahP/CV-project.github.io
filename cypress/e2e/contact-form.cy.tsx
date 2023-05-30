describe("contact test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("testing navbar when click", () => {
    cy.get("h1").contains("My CV");
    cy.get('[data-cy="menu-icon"]').click();
    cy.get(':nth-child(2) > [data-cy="left-menu"]').click();
    cy.get(':nth-child(3) > [data-cy="left-menu"]').click();
    cy.get(':nth-child(4) > [data-cy="right-menu"]').click();
    cy.get(':nth-child(5) > [data-cy="right-menu"]').click();
    cy.get(':nth-child(6) > [data-cy="right-menu"]').click();
    cy.get(':nth-child(1) > [data-cy="left-menu"]').click();
    cy.get('[data-cy="menu-icon"]').click();
  });
  it("testing landing home page", () => {
    cy.get("h2").contains("About Me");
    cy.get('[data-cy="home-p"]').should("exist");
    cy.get("button").contains("More").click();
  });
  it.only("testing about page",()=>{
    cy.get('');
  })
  it("error when all input box blank", () => {
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error-name"]').should("exist");
    cy.get('[data-cy="error-email"]').should("exist");
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Go to the success page when the form is filled and the button is clicked", () => {
    cy.get('[data-cy="input-name"]').type("Ngurah Putra");
    cy.get('[data-cy="input-email"]').type("ngurahputra2425@gmail.com");
    cy.get('[data-cy="input-message"]').type("Hello");
    cy.intercept("POST", "https://formsubmit.co/ngurahputra2425@gmail.com").as(
      "contactForm"
    );
    cy.get('[data-cy="submit"]').click();
    cy.wait("@contactForm");
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Form submitted successfully!");
    });
  });
});
