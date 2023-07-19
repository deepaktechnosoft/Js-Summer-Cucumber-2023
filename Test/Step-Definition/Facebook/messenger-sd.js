const { Given, When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../Pages/LandingPage");
const MessengerLandingPage = require("../Pages/MessengerLandingPage");
const MessengerLoginPage = require("../Pages/MessengerLoginPage");
const { expect } = require("chai");

Given(/^I am on facebook landing page$/, async function () {
    await browser.url('/');
});

Given(/^I click on Messenger link$/, async function () {
    const lpage = new LandingPage();
    await lpage.clickMessenger();
});


When(/^I click on Log in button$/, async function () {
    const messengerLandingPage = new MessengerLandingPage();
    await messengerLandingPage.clickLogInButton();
});

Then(/^I verify error message is displayed$/, async function () {
    const messengerLoginPage = new MessengerLoginPage();
    expect(await messengerLoginPage.isIncorrectLoginErrorDisplayed(), 'Messenger login error is NOT displayed').to.be.true;
});