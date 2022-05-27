it('google search functionality 1',function(){
    cy.log('Google 1st test Starts')
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Automation Step by Step {enter}')
    cy.contains('Videos').click()
    //https://opensource-demo.orangehrmlive.com/
    
})

it('google search functionality 2',function(){
    cy.log('Google 2nd test Starts')
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Automation Step by Step {enter}')
    cy.contains('Videos').click()
    //https://opensource-demo.orangehrmlive.com/
    
})