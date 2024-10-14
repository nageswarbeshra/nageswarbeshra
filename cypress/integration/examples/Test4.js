/// <reference types="cypress" />


describe('my first test suite', function()
{
it('My firstTest case ',function(){
//test step
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert

cy.on('window:alert',(str)=>
{
    //mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=>
{
    //mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

})
})