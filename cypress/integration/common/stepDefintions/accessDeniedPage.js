Then('I should see the text {string}', (text) => {
    cy.xpath(`//div[@id='404-app']`).should('be.visible');
    cy.xpath(`//span[@data-component-type='text' and contains(text(),'${text}')]`).should('be.visible');
})