describe('Example Test', () => {
  it('should visit the app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Search').should('be.visible');
  });
});
