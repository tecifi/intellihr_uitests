// Step Definitions for Permission Page are placed here.

// Verify that modal header with header text is visible. Input modal header text to this step.
Then('I should see the modal header {string}', (headerText) => {
    cy.xpath(`//div[contains(text(),'${headerText}')]/parent::*[@data-component-type='modal_header']`).should('be.visible');
})

// Verify that alert having a specific text is visible.Input alert text here
Then('I should see the alert {string}', (alertText) => {
    cy.xpath(`//div[contains(text(),'${alertText}')]/parent::*[@class='toast-content no-heading']`).should('be.visible');
})

// Enter Input Value for a particular label.Input Text Input and Label Name to this step.
Then('I enter {string} in {string}', (textInput, labelName) => {
    const skillName = textInput+'-'+new Date().getTime();
    cy.xpath(`//label[contains(text(), '${labelName}')]`).then(($span) => {
        const forAttribute = $span.attr('for')
        cy.xpath(`//*[@id='${forAttribute}']`).clear({ force: true }).type(skillName);
    })
    if(labelName === 'Skill Name'){
        cy.writeFile('cypress/fixtures/skillSet.json', { skill: skillName})
    }
})

// Selecting a specific dropdown option,Input select option and label Name here.
Then('I select {string} for {string}', (selectOption, labelName) => {
    cy.xpath(`//label[contains(text(), '${labelName}')]`).then(() => {
        cy.xpath(`//div[contains(text(),'Please Select')]`).click({force: true});
        cy.xpath(`//div[@role='option' and contains(text(),'${selectOption}')]`).click({force: true});
    })
})

// Verify that specific skill from json file is visible.
Then('I enter above Skill in Search', () => {
  cy.get('#filterControllerSearchInput').should('be.visible');
  cy.readFile('cypress/fixtures/skillSet.json').then((res) => {
    cy.get('#filterControllerSearchInput')..clear({ force: true }).type(res.skill)
  })
  cy.xpath(`//div[@data-component-context='skill-settings-card']//descendant::button/i[@data-component-type='icon']`)
})


// Click on a specific Icon Button. Input icon button text to this step.
Then('I click on {string} icon button', (iconButtonText) => {
    cy.xpath(`//div[@data-component-context='skill-settings-card']//descendant::button/i[@data-component-type='icon']`).should('be.visible');
    cy.xpath(`//div[@data-component-context='skill-settings-card']//descendant::button/i[@data-component-type='icon']`).click({force: true});
    cy.xpath(`//li/button/div/div[contains(text(),'${iconButtonText}')]`).click({force: true});
})

// Verify that specific skill from json file is not visible.
Then('I should not see Skill in Search', () => {
    cy.get('#filterControllerSearchInput').should('be.visible');
    cy.readFile('cypress/fixtures/skillSet.json').then((res) => {
      cy.get('#filterControllerSearchInput')..clear({ force: true }).type(res.skill)
    })
    cy.xpath(`//div[contains(text(),'Could not find any skills')]`).should('be.visible');
  })
  