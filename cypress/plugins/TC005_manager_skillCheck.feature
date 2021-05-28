Feature: As a manager user
I want to visit <tenant>/spa/settings/skills
So that I should be able to create skill

  Scenario: Manager Creating Accounting and Administration Skill
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/spa/settings/skills'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Manager" user credentials
    And I click on button "Sign In"
    Then I should see the header "Skills"

#   Manager Creating Accounting Skill
    When I click on link "Create Skill"
    Then I should see the modal header "Create New Skill"

    When I enter "TestSkill" in "Skill Name"
    And I select "Accounting" for "Skill Discipline"
    And I enter "Sample test description" in "Skill Description"
    And I click on button "Save"
    Then I should see the alert "New skill has successfully been created"

#   Manager Creating Administration Skill
    When I click on link "Create Skill"
    Then I should see the modal header "Create New Skill"

    When I enter "TestSkill" in "Skill Name"
    And I select "Administration" for "Skill Discipline"
    And I enter "Sample test description" in "Skill Description"
    And I click on button "Save"
    Then I should see the alert "New skill has successfully been created"

#  Manager Deleting Administration Skill
    When I enter above Skill in Search
    And I click on "Delete" icon button
    Then I should see the modal header "Deleting Skill"

    When I click on button "Delete"
    Then I should see the alert "The selected skill has successfully been deleted"
    Then I should not see Skill in Search