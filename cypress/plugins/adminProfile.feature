Feature: As a admin user
I want to navigate to Profile Page
So that I can view and update profile

  Scenario: View and Update Profile
    When I visit 'https://qa-tech-test-demo.uat.internihr.ninja/auth/login'
    Then I should see the header "Welcome back!"
    And username and password fields are visible

    When I enter "Admin" user credentials
    And I click on button "Sign In"
    Then I should see the header "Good afternoon"

    When I click on sidebar menu "My Profile"
    Then I should see the section header "Personal Information"

    When I click Edit Icon Button on "Email Address" Section
    Then I should see the header "Edit Email Address"
    And Updated Email Address and Type should be visible in Detail Page