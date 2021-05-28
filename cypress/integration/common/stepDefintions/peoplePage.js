Then('I click on {string} in {string}', (iconButton, buttonText) => {
    cy.xpath(`//button[contains(text(),'${buttonText}')]`).should('be.visible');
    cy.xpath(`//button[contains(text(),'${buttonText}')]`).click({ force: true });
    cy.xpath(`//a/div/div[contains(text(),'${iconButton}')]`).click({ force: true });
})

Then('file download should be successful', () => {
    const downloadsFolder = Cypress.config("downloadsFolder");
    // Wait for 6 seconds for download to complete
    cy.wait(6000);
    cy.task('fileCheck',{dirName: downloadsFolder})
})

When('I click Edit Icon Button on {string} Section', (sectionName) => {
    cy.xpath(`//h2[contains(text(),'${sectionName}')]`).scrollIntoView();
    cy.xpath(`//div[@data-component-context='email-address-annotated-section']//descendant::i[@data-component-type='icon']`).click({ force: true });
    cy.xpath(`//li/a/div/div[contains(text(),'Edit')]`).click({ force: true });
})

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