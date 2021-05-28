// Master Step Definitions are placed here.

// Navigate to a specific url, Input required Url to this step.
Given('I visit {string}', (pageUrl) => {
  cy.visit(pageUrl);
})

// Verifying Page title, Input required Title to this step.
Then('I should see the title {string}', (title) => {
  cy.title().should('include', title);
})

// Verifying Logo Image is Visible, Input LogoText to this step.
Then('{string} logo is visible', (logoText) => {
  cy.xpath(`//a/img[@alt='${logoText}']`).should('be.visible');
})

// Clicking on Hyperlink having a specific text, Input Hyperlink text to this step.
And('I click on hyperlink with text {string}', (hyperlinkText) => {
  cy.xpath(`//a[contains(text(),'${hyperlinkText}')]`).click({ force: true });
})

// Verifying h1 Header on a Page, Input h1 header text to this step.
Then('I should see the header {string}', (headerText) => {
  cy.xpath(`//h1[contains(text(),'${headerText}')]`).should('be.visible');
})

// Verify that current url contains a specific string, Input required string to this step.
And('current url should contain {string}', (url) => {
  cy.url().should('include', `${url}`);
})

// Clicking a button having a button text, Input button text to this step.
And('I click on button {string}', (buttonText) =>{
  cy.xpath(`//button[contains(text(),'${buttonText}')]`).click({ force: true });
})

// Verifying h2 Header on a Page, Input h2 header text to this step.
Then('I should see the section header {string}', (headerText) => {
  cy.xpath(`//h2[contains(text(),'${headerText}')]`).should('be.visible');
})