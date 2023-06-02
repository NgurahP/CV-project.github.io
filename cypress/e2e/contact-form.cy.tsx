describe("contact test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("testing on navbar when click", () => {
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
  it("testing on landing home page", () => {
    cy.get("h2").contains("About Me");
    cy.get('[data-cy="home-p"]').should("exist");
    cy.get("button").contains("More").click();
  });
  it("testing on about page", () => {
    cy.get('[data-cy="menu-icon"]').click();
    cy.get(':nth-child(2) > [data-cy="left-menu"]').click();
    cy.get('[data-cy="menu-icon"]').click();
    cy.get('[data-cy="img-about"]').should("be.visible");
    cy.get('[data-cy="personal-info"]').should("exist");
    cy.get('[data-cy="name-h"]').should("exist");
    cy.get('[data-cy="name-p"]').should("exist");
    cy.get('[data-cy="gender-h"]').should("exist");
    cy.get('[data-cy="gender-p"]').should("exist");
    cy.get('[data-cy="birth-h"]').should("exist");
    cy.get('[data-cy="birth-p"]').should("exist");
    cy.get('[data-cy="age-h"]').should("exist");
    cy.get('[data-cy="age-p"]').should("exist");
    cy.get('[data-cy="address-h"]').should("exist");
    cy.get('[data-cy="address-p"]').should("exist");
    cy.get('[data-cy="national-h"]').should("exist");
    cy.get('[data-cy="national-p"]').should("exist");
  });
  it("testing on education page", () => {
    cy.get('[data-cy="menu-icon"]').click();
    cy.get(':nth-child(4) > [data-cy="right-menu"]').click();
    cy.get('[data-cy="menu-icon"]').click();
    cy.get('[data-cy="Education"]').should("exist");
    cy.get(':nth-child(1) > [data-cy="img-edu"]').should("be.visible");
    cy.get(':nth-child(1) > [data-cy="title-edu"]').should("exist");
    cy.get(':nth-child(1) > [data-cy="tahun-edu"]').should("exist");
    cy.get(':nth-child(2) > [data-cy="img-edu"]').should("be.visible");
    cy.get(':nth-child(2) > [data-cy="title-edu"]').should("exist");
    cy.get(':nth-child(2) > [data-cy="tahun-edu"]').should("exist");
    cy.get(':nth-child(3) > [data-cy="img-edu"]').should("be.visible");
    cy.get(':nth-child(3) > [data-cy="title-edu"]').should("exist");
    cy.get(':nth-child(3) > [data-cy="tahun-edu"]').should("exist");
  });
  it("testing on portfolio page", () => {
    cy.get('[data-cy="menu-icon"]').click();
    cy.get(':nth-child(4) > [data-cy="right-menu"]').click();
    cy.get('[data-cy="menu-icon"]').click();
    cy.get('[data-cy="portfolio-header"]').should("exist");
    cy.get('[data-cy="portfolio-p"]').should("exist");
    cy.get('[data-cy="portfolio-img"]').should("be.visible");
    cy.get('[data-cy="portfolio-code"]').should("exist");
    cy.get('[data-cy="portfolio-demo"]').should("exist").click();
  });
  it.only("testing on experience page", () => {
    cy.get('[data-cy="menu-icon"]').click();
    cy.get(':nth-child(5) > [data-cy="right-menu"]').click();
    cy.get('[data-cy="menu-icon"]').click();
    cy.get('[data-cy="exp-header"]').should("exist");
    cy.get('[data-cy="exp-p"]').should("exist");
    cy.get(':nth-child(1) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(1) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(2) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(2) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(3) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(3) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(4) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(4) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(5) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(5) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(6) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(6) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(7) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(7) > [data-cy="exp-title"]').should("exist");
    cy.get(':nth-child(8) > [data-cy="exp-img"]').should("be.visible");
    cy.get(':nth-child(8) > [data-cy="exp-title"]').should("exist");
  });
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
