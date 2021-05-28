// Step Definitions for Permission Page are placed here.

// Click on a button text on a specific section.Input button text to this step.
Then('I click {string} button on {string} section', (buttonText, sectionName) => {
    cy.xpath(`(//button[contains(text(),'${buttonText}')])[1]`).scrollIntoView();
    cy.xpath(`(//button[contains(text(),'${buttonText}')])[1]`).click();
    //cy.xpath(`//button[contains(text(),'${buttonText}')]/ancestor::div/descendant::span[contains(text(),'${sectionName}')]`).should('be.visible');
    //cy.xpath(`//button[contains(text(),'${buttonText}')]/ancestor::div/descendant::span[contains(text(),'${sectionName}')]`).click({force:true});
})

// Verify that Pay Details are visible on the Remuneration Section.
Then('Pay Details should be visible', () => {
    cy.xpath(`//div[contains(@data-component-type, 'grid_layout_cell') and contains(.//span, 'Base Annual Salary')]`).should('be.visible');
    cy.xpath(`//div[contains(@data-component-type, 'grid_layout_cell') and contains(.//span, 'Annual Package')]`).should('be.visible');
    cy.xpath(`//div[contains(@data-component-type, 'grid_layout_cell') and contains(.//span, 'Hourly Package')]`).should('be.visible');
})