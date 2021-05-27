Given('I visit {string}', (pageUrl) => {
  cy.visit(pageUrl);
})

Then('I should see the title {string}', (title) => {
  cy.title().should('include', title);
})

Then('Verify {string} logo is visible', (logoText) => {
  cy.xpath(`//a/img[@alt='${logoText}']`).should('be.visible');
})

And('I click on link {string}', (hyperlinkText) => {
  cy.xpath(`//a/span[contains(text(),'${hyperlinkText}')]`).click({ force: true });
})

And('I click on hyperlink with text {string}', (hyperlinkText) => {
  cy.xpath(`//a[contains(text(),'${hyperlinkText}')]`).click({ force: true });
})

Then('I should see the header {string}', (headerText) => {
  cy.xpath(`//h1[contains(text(),'${headerText}')]`).should('be.visible');
})

And('I click on {string} for {string}', (jobText, jobPosition) => {
  cy.xpath(`//div/strong[contains(text(),'${jobPosition}')]/../../*[contains(text(),'${jobText}')]`).click({ force: true });
})

Then('I should be navigated to Seek Page', () => {
  cy.url().should('include', 'https://www.seek.com.au/job');
})

And('current url should contain {string}', (url) => {
  cy.url().should('include', `${url}`);
})

And('I click on button {string}', (buttonText) =>{
  cy.xpath(`//button[contains(text(),'${buttonText}')]`).click({ force: true });
})