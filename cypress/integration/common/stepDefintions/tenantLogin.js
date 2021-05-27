Then('username and password fields are visible', () => {
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
})

Then('I enter {string} user credentials', (userType) => {
    if(userType === 'Normal'){
        cy.get('#username').type('charlie');
        cy.get('#password').type('fishactivitystrengthneedle',{log: false});
    }
    if(userType === 'Manager'){
        cy.get('#username').type('kenphil');
        cy.get('#password').type('actvisitoredgetool',{log: false});
    }
})