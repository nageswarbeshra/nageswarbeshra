/// <reference types="cypress" />


describe('my first test suite', function()
{
it('My firstTest case ',function(){
//test step
 

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
cy.wait(2000)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)
cy.wait(2000)
cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
{
    console.log('Manual console function used')
})
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
cy.wrap($el).find('button').click()
}
})

//assert if logo is correctly displayed
cy.get('.brand').should('have.text','GREENKART')


//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())

})

cy.get(':nth-child(1) > .product-price').then(function(price)
{
    cy.log(price.text())
})
})
})