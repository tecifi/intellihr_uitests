Then('I should see the modal header {string}', (headerText) => {
    cy.xpath(`//div[contains(text(),'${headerText}')]/parent::*[@data-component-type='modal_header']`).should('be.visible');
})

Then('I should see New Skill created alert', () => {
    cy.xpath(`//div[contains(text(),'New skill has successfully been created')]/parent::*[@class='toast-content no-heading']`).should('be.visible');
})

Then('I enter {string} in {string}', (textInput, labelName) => {
    cy.xpath(`//label[contains(text(), '${labelName}')]`).then(($span) => {
        const forAttribute = $span.attr('for')
        cy.xpath(`//*[@id='${forAttribute}']`).clear({ force: true }).type(textInput+'-'+new Date().getTime());
    })
})

Then('I select {string} for {string}', (selectOption, labelName) => {
    cy.xpath(`//label[contains(text(), '${labelName}')]`).then(() => {
        cy.xpath(`//div[contains(text(),'Please Select')]`).click({force: true});
        cy.xpath(`//div[@role='option' and contains(text(),'${selectOption}')]`).click({force: true});
    })
})
