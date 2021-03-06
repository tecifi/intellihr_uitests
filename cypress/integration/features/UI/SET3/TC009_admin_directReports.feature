Feature: As a Manager user
I want to navigate to People Page
So that I can see the direct reports of a manager

  Scenario: Direct Reports of Manager
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/spa/people/76b4a59e-aee4-4dd4-a939-b8e759b3c040'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Manager" user credentials
    And I click on button "Sign In"
    Then I should see the section header "Personal Information"

    When I click on hyperlink with text "Job"
    Then I should see the button "Job Actions"

    When I scroll to section header "Reporting"
    Then "Reassign Direct Reports" link should be visible
    And "Stefan Borrow" and "Eugene Naidoo" should be listed as direct reports