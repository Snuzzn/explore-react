describe("Navigation", () => {
  it("should navigate to a page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/fundamentals/use-state-hook"]').click();

    // // The new url should include "/about"
    cy.url().should("include", "/fundamentals/use-state-hook");

    cy.get('a[href*="/"]').click();
    cy.url().should("include", "/");

    // // The new page should contain an h1 with "About page"
    // cy.get('h1').contains('About Page')
  });

  it("should reset demo after going back to the page", () => {
    cy.visit("http://localhost:3000/fundamentals/use-state-hook");

    cy.get("[data-test-id='increase']").click();
    cy.get("[data-test-id='increase']").click();
    cy.get("[data-test-id='decrease']").click();

    cy.get("[data-test-id='count']").contains("1").should("be.visible");

    cy.get('a[href*="/"]').click();
    cy.url().should("include", "/");

    cy.get('a[href*="/fundamentals/use-state-hook"]').click();
    cy.get("[data-test-id='count']").contains("0").should("be.visible");
  });
});
