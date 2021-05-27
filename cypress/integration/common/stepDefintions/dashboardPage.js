Then('{string} link should be visible', (linkText) => {
    cy.xpath(`//a[contains(text(),'${linkText}')]`).should('be.visible');
})