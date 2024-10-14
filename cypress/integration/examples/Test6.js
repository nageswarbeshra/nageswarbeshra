/// <reference types="cypress" />


describe('my first test suite', function()
{
it('My firstTest case ',function(){
//test step
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{

    const text=$el.text()
    console.log("text")
    
    if(text.includes("interview"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
    {
        const priceText = price.text()
        console.log(priceText)
        expect(priceText).to.equal('0')
    })


    }
})
})
})