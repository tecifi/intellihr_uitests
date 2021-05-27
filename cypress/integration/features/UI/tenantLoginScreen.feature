Feature: As a non-logged in user
I want to visit <tenant>/spa/settings
So that I should see the login page <tenant>/auth/login

  Scenario: Navigating to Tenant site
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/spa/settings'
    Then I should see the header "Welcome back!"
    And current url should contain "https://qa-tech-test-demo.uat.internihr.ninja/auth/login"
    And username and password fields are visible