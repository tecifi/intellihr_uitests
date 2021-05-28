// Step Definitions for Permission Page are placed here.

// Verify that a specific text is found in 404 page, Input text to this step.
Then('I should see the text {string}', (text) => {
    cy.xpath(`//div[@id='404-app']`).should('be.visible');
    cy.xpath(`//span[@data-component-type='text' and contains(text(),'${text}')]`).should('be.visible');
})