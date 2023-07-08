Feature: Login

    /**
     * TC: Verify login fields are enabled by default
     * 1. Launch facebook.com
     * 2. Verify login email field is enabled
     * 3. Verify login password is enabled
     * 4. Verify login button is enabled
     */
    Scenario: Verify login fields are enabled
        Given I am on facebook landing page
        Then I Verify login email field is enabled
        And I Verify login password field is enabled
        And I Verify login button is enabled
