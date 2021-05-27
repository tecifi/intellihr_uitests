Feature: As a manager user
I want to visit job page
So that I should be able to view Remuneration details

  Scenario: Manager verifying Remuneration
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/auth/login'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Manager" user credentials
    And I click on button "Sign In"

    When I click on sidebar menu "My Profile"
    And I click on hyperlink with text "Job"
    Then I should see the button "Job Actions"
    And I click "Show Content" button on "Remuneration Schedule" section
    Then Pay Details should be visible