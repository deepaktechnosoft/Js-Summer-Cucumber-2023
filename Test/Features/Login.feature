Feature: Login

    @loginFields
    Scenario: Verify login fields are enabled
        Given I am on facebook landing page
        Then I Verify login email field is enabled
        And I Verify login password field is enabled
        And I Verify login button is enabled

    @invalidLogin
    Scenario: Verify user gets error for invalid credentials
        Given I am on facebook landing page
        When I enter "^%$$%$" in login email
            And I enter "abcd@1234" in login password
            And I click on login button
        Then I verify login error message is displayed