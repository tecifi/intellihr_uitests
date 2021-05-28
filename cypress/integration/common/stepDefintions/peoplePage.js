// Step Definitions for Login Page are placed here.

// Clicking on icon button under a button. Input Icon Button and ButtonText here.
Then('I click on {string} in {string}', (iconButton, buttonText) => {
    cy.xpath(`//button[contains(text(),'${buttonText}')]`).should('be.visible');
    cy.xpath(`//button[contains(text(),'${buttonText}')]`).click({ force: true });
    cy.xpath(`//a/div/div[contains(text(),'${iconButton}')]`).click({ force: true });
})

// Verify that file download has been successful.
Then('file download should be successful', () => {
    const downloadsFolder = Cypress.config("downloadsFolder");
    // Wait for 7 seconds for download to complete
    cy.wait(7000);
    cy.task('fileCheck',{dirname: downloadsFolder})
})

// Clicking on Edit Icon button on a specific section.
When('I click Edit Icon Button on {string} Section', (sectionName) => {
    cy.xpath(`//h2[contains(text(),'${sectionName}')]`).scrollIntoView();
    cy.xpath(`//div[@data-component-context='email-address-annotated-section']//descendant::i[@data-component-type='icon']`).click({ force: true });
    cy.xpath(`//li/a/div/div[contains(text(),'Edit')]`).click({ force: true });
})

// Verify that Details are visible in Detail Page
Then('Updated Email Address and Type should be visible in Detail Page', () => {
    const nowTime = 'test'+new Date().getTime()+'@gmail.com';
    cy.xpath(`//input[@id='emailAddress']`).should('be.visible');
    cy.xpath(`//input[@id='emailAddress']`).clear({ force: true }).type(nowTime);
    cy.xpath(`//button[contains(text(),'Save')]`).click({ force: true });
    cy.xpath(`//h2[contains(text(),'Personal Information')]`).should('be.visible');
    cy.xpath(`//h2[contains(text(),'Email Address')]`).scrollIntoView();
    cy.xpath(`//h2[contains(text(),'Email Address')]`).should('be.visible');
    cy.xpath(`//span[@color='primary' and contains(text(),'Primary')]/../a[contains(text(),'${nowTime}')]`).should('be.visible');
})

// Verify that people names passed are listed as reports, pass first and second person name in here.
When('{string} and {string} should be listed as direct reports', (firstPerson,secondPerson) => {
    cy.xpath(`//div[@data-component-context="job-attribute-Direct Reports"]//descendant::span[contains(text(),'${firstPerson}')]`).should('be.visible');
    cy.xpath(`//div[@data-component-context="job-attribute-Direct Reports"]//descendant::span[contains(text(),'${secondPerson}')]`).should('be.visible');
})