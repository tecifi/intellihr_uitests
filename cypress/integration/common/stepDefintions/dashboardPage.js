// Step Definitions for Dashboard Page are placed here.

// Click on a specific link on Dashboard Page, Input LinkText to this step
And('I click on link {string}', (hyperlinkText) => {
    cy.xpath(`//a/span[contains(text(),'${hyperlinkText}')]`).click({ force: true });
})

// Verify that a specific link is visible, Input link text to this step.
Then('{string} link should be visible', (linkText) => {
    cy.xpath(`//a[contains(text(),'${linkText}')]`).should('be.visible');
})

// Click on a specific dashboard menu item, open top bar as we use a small screen in cypress.
When('I click on sidebar menu {string}', (menuItem) => {
    cy.xpath(`//button[@data-component-context="mobile-topbar-menu-button"]`).click({ force: true });
    cy.xpath(`(//li/a/span[contains(text(),'${menuItem}')])[1]`).click({ force: true });
    cy.xpath(`//button[@data-component-context="mobile-topbar-menu-button"]`).click({ force: true });
})