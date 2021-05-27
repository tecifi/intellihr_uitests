Feature: As an anonymous user
I want to navigate to intellihr careers page
So that i can verify that i am navigated to seek job page once i click on job

  Scenario: Navigating to Seek Job Page
    When I visit 'https://www.intellihr.com'
    And I click on link "Careers"
    Then I should see the header "Careers"

    When I click on hyperlink with text "CURRENT VACANCIES"
    And I click on "View Job Description" for "Quality Assurance Engineer II"
    And I click on hyperlink with text "APPLY NOW"
    Then I should be navigated to Seek Page