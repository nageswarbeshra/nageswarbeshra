/// <reference types="cypress" />


describe('my first test suite', function()
{
it('My firstTest case ',function(){
//test step
 

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)

cy.get('.products').as('productLocator')


cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
cy.wrap($el).find('button').click()
}
})
cy.get('.tada').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
})
})
