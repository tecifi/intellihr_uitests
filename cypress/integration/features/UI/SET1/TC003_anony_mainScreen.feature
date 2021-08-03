Feature: As an Anonymous user
I want to visit settings page
So that I should be navigated to login page

  Scenario: Navigating to Tenant site
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/spa/settings'
    Then I should see the header "Welcome back!"
    And current url should contain "https://qa-tech-test-demo.uat.internihr.ninja/auth/login"
    And username and password fields are visible