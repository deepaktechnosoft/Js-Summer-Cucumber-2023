@calendar @regression
Feature: Calendar

    @calendar-1
    Scenario: Verify past dates are disabled in the current month Calendar
        Given I am on hotels landing page
        When I click Dates button
        Then I verify past dates in current month are disabled

    # Refer: moment() library esp how to get currentDate using moment library.