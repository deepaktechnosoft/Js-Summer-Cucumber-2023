Feature: Travelers

    Scenario: Verify the travelers count is correct
        Given I am on hotels landing page
        When I change adults count to 4
            And I change children count to 2
            And I select child-1 age as 2
            And I select child-1 age as Under 1
            And I click on Done button
        Then I verify the travelers count is update correctly
    

    Scenario: Verify traverls cannot add more than 6 children
        Given I am on hotels landing page
        When I change children count to 4
        Then I verify plus button is enabled
        When I change children count to 6
        Then I verify plus button is disabled
        When I change children count to 5
        Then I verify plus button is enabled
        

