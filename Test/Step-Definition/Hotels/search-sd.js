const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const SearchResultsPage = require("../../Pages/Hotels/SearchResultsPage");

const landingPage = new LandingPage();
const searchResultPage = new SearchResultsPage();


Given(/^I am on hotels landing page$/, async function () {
    await browser.url('https://www.hotels.com/');
});

When(/^I enter (.+) in Search box$/, async function (destination) {
    await landingPage.enterDestination(destination);
});

When(/^I select (.+) from Search Autosuggestion$/, async function (pickFromSuggestion) {
    await landingPage.selectFromAutoSuggestion(pickFromSuggestion);
});

When(/^I click (.+) button$/, async function(buttonName) {
    switch (buttonName) {
        case 'Search':
            await landingPage.clickSearchButton();
            await browser.pause(5000);
            break;
        case 'Sign in':
            // code to click to Sign-in button
            break;
        case 'Dates':
            landingPage.openCalendar();
            // 
            break;
        default:
            break;
    }
})


Then(/^I verify Going to has the (.+) on Search Results page$/, async function (expGoingTo) {
    goingToOnWeb = await searchResultPage.getGoingToText();
    expect(goingToOnWeb.includes(expGoingTo), 'Going to text is NOT as expected').to.be.true;
})