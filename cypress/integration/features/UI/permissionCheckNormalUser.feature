Feature: As a normal user
I want to make sure that I cannot access edit configuration
So that my permission is set correctly

  Scenario: Normal User Permission Check
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/configuration/edit'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Normal" user credentials
    And I click on button "Sign In"
    Then I should see the text "Page Not Found"