Feature: As an anonymous user
         I want to navigate to intellihr site
         So that i can verify homepage and title
    @test
    Scenario: Navigating to Intellihr site
        When I visit 'https://www.intellihr.com'
        Then I should see the title "intelliHR"
        And Verify 'intelliHR' logo is visible
