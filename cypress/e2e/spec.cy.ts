describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  
  it("provides a search form and allows searching", () => {
    cy.get('[data-testid="search-input"]').should("be.visible");
    cy.get('[data-testid="search-button"]')
      .should("contain", "Search")
      .and("be.visible");

    cy.get('[data-testid="search-input"]').type("finance");
    cy.get('[data-testid="search-button"]').click();

    cy.get('[data-testid="search-result"]').should("have.length.at.least", 1);

    cy.get('[data-testid="search-result-title"]')
      .first()
      .invoke("attr", "target")
      .should("eq", "_blank");

    cy.get('[data-testid="search-input"]')
      .clear()
      .type("nonexistentquery{enter}");

    cy.get('[data-testid="no-results"]')
      .should("contain", "There are no results matching your query.")
      .and("be.visible");
  });

  it("allows searching by pressing the Enter key", () => {
    cy.get('[data-testid="search-input"]').type("finance{enter}");

    cy.get('[data-testid="search-result"]').should("have.length.at.least", 1);
    cy.get('[data-testid="search-result"]')
      .first()
      .should("contain", "finance")
      .and("be.visible");
  });
})