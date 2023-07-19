Feature: Search

    Scenario: Verify user can search using auto-suggestion
        Given I am on hotels landing page
        When I enter bor in Search box
            And I select Bordeaux Gironde, France from Autosuggestion
            And I click Search button
        Then I verify Going to has the Bordeaux Gironde, France on Search Results page
