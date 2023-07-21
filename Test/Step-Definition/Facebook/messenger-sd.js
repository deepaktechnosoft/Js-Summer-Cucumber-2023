const { Given, When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../../Test/Pages/Facebook/LandingPage");
const MessengerLoginPage = require("../../../Test/Pages/Facebook/MessengerLoginPage");
const { expect } = require("chai");

Given(/^I am on facebook landing page$/, async function () {
    await browser.url('/');
});

Given(/^I click on Messenger link$/, async function () {
    const lpage = new LandingPage();
    await lpage.clickMessenger();
});


When(/^I click on Log in button$/, async function () {
    const messengerLandingPage = new messengerLandingPage();
    await messengerLandingPage.clickLogInButton();
});

Then(/^I verify error message is displayed$/, async function () {
    const messengerLoginPage = new MessengerLoginPage();
    expect(await messengerLoginPage.isIncorrectLoginErrorDisplayed(), 'Messenger login error is NOT displayed').to.be.true;
});