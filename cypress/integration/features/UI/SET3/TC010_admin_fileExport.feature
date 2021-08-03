Feature: As an Admin user
I want to navigate to People Page
So that I can export a report of the people

  Scenario: File Export
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/spa/people'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Admin" user credentials
    And I click on button "Sign In"
    Then I should see the header "People"

    When I click on "All People" in "Export People"
    Then file download should be successful