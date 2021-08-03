Feature: As a Normal user
I want to dashboard page
So that I can verify that dashboard page is loaded correctly

  Scenario: Navigating to Tenant site
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/auth/login'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Normal" user credentials
    And I click on button "Sign In"
    Then I should see the header "Charlie"
    And "Dashboard" link should be visible