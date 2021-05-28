// Step Definitions for Careers Page are placed here.

// Clicking on a specific Job Position for a Job, Input Job Text and Job Position here.
When('I click on {string} for {string}', (jobText, jobPosition) => {
    cy.xpath(`//div/strong[contains(text(),'${jobPosition}')]/../../*[contains(text(),'${jobText}')]`).click({ force: true });
})