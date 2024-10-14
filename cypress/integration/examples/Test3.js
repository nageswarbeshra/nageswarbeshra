/// <reference types="cypress" />


describe('my first test suite', function()
{
it('My firstTest case ',function(){
//test step
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])
//Static dropdown 
cy.get('Select').select('Option3').should('have.value','option3')

cy.get('#autocomplete').type('Ind')
cy.get('.ui-menu-item div').each(($el, index, $list) => {

    if($el.text()=="India")
    {
        cy.wrap($el).click()
    }

})
cy.get('#autocomplete').should('have.value','India')
})
})