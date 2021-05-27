Feature: As a non-logged in user
I want to visit <tenant>/spa/settings
So that I should see the login page <tenant>/auth/login

  Scenario: Navigating to Tenant site
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/auth/login'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Normal" user credentials
    And I click on button "Sign In"
    Then I should see the header "Good afternoon, Charlie"
    And "Dashboard" link should be visible