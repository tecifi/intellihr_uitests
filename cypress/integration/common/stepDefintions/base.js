Given('I visit {string}', (pageUrl) => {
  cy.visit(pageUrl);
})

Then('I should see the title {string}', (title) => {
  cy.title().should('include', title);
})

Then('Verify {string} logo is visible', (logoText) => {
  cy.xpath(`//a/img[@alt='${logoText}']`).should('be.visible');
})