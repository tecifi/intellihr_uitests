Then('I click on {string} in {string}', (iconButton, buttonText) => {
    cy.xpath(`//button[contains(text(),'${iconButton}')]`).click({ force: true });
    cy.xpath(`//a/div/div[contains(text(),'${buttonText}')]`).click({ force: true });
})

Then('file download should be successful', () => {
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.task('fileCheck',{ downloadsFolder})
})