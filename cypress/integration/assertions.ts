it.only('learning assertions', function(){
  
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    .should('be.visible')
    .should('be.enabled')
    
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')
    cy.get('#query-btn').should('contain','Button').and('be.visible')

    //Explict Assertions
    expect(true).to.be.true
    let name='Srinivas'
    expect(name).to.be.equal('Srinivas')
    assert.equal(4,5,'Not equal')
})