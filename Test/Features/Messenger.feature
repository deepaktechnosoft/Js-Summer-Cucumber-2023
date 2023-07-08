Feature: Messenger

    /**
     * TC: Verify user gets error for empty login flow
     * 1. Launch facebook.com
     * 2. Click Messenger link
     * 3. Click "Log in" button
     * 4. Verify error message (Incorrect email or phone number) is displayed
     */
    Scenario: Verify user gets error for empty login flow
        Given I am on facebook landing page
        And I click on Messenger link
        When I click on Log in button
        Then I verify error message (Incorrect email or phone number) is displayed