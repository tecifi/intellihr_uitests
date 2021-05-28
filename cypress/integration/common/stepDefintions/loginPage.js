// Step Definitions for Login Page are placed here.

// Verify that username and password input fields are visible.
Then('username and password fields are visible', () => {
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
})

/* Input Required User Type to login to this step
   Supported Normal, Manager and Admin Parameters
   Read Username and Password from environment variables as well. */
Then('I enter {string} user credentials', (userType) => {
    if(userType === 'Normal'){
        cy.get('#username').type(Cypress.env('normal_username'));
        cy.get('#password').type(Cypress.env('normal_password'),{log: false});
    }
    if(userType === 'Manager'){
        cy.get('#username').type(Cypress.env('manager_username'));
        cy.get('#password').type(Cypress.env('manager_password'),{log: false});
    }
    if(userType === 'Admin'){
        cy.get('#username').type(Cypress.env('admin_username'));
        cy.get('#password').type(Cypress.env('admin_password'),{log: false});
    }
})