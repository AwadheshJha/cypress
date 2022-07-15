describe('athena happy flow', function() {
  beforeEach(function() {
    cy.intercept('POST', 'https://haptikappimg.s3.amazonaws.com/').as(
      'imageuploaded'
    );
  });

  it('C459 Should be able to send message', function() {
    cy.visit('/');
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click();
    
    
  });
});
