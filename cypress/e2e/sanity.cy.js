describe('demo testing for cypress', function() {
  beforeEach(function() {
    cy.intercept('POST', '').as(
      'imageuploaded'
    );
  });

  it('Should be able to assert UI elements', function() {
    cy.visit('/');
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click();
    
    
  });
});
