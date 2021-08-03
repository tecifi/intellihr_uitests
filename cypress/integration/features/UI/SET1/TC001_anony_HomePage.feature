Feature: As an Anonymous user
I want to navigate to intellihr site
So that i can verify homepage and title

  Scenario: Navigating to Intellihr site as Anonymous User
    When I visit 'https://www.intellihr.com'
    Then I should see the title "intelliHR"
    And 'intelliHR' logo is visible