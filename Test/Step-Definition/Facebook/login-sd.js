const { Then, When } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Facebook/LandingPage");
const { expect } = require("chai");
const LoginErrorPage = require("../../Pages/LoginErrorPage");

Then(/^I Verify login email field is enabled$/, async function () {
    const lPage = new LandingPage();
    expect(await lPage.isLoginUsernameEnabled(), 'Login email field is NOT enabled').to.be.true;
});

Then(/^I Verify login password field is enabled$/, async function () {
    const lPage = new LandingPage();
    expect(await lPage.isLoginPasswordEnabled(), 'Login password field is NOT enabled').to.be.true;
});

Then(/^I Verify login button is enabled$/, async function () {
    const lPage = new LandingPage();
    expect(await lPage.isLoginButtonEnabled(), 'Login button is NOT enabled').to.be.true;
});

When(/^I enter "()" in login email$/, async function (email) {
    const lPage = new LandingPage();
    await lPage.enterLoginEmail(email);
});

When(/^I enter "(.+)" in login password$/, async function (pwd) {
    const lPage = new LandingPage();
    await lPage.enterLoginPassword(pwd);
});

When(/^I click on login button$/, async function () {
    const lPage = new LandingPage();
    await lPage.clickLoginButton();
});

Then(/^I verify login error message is displayed$/, async function () {
    const loginErrorPage = new LoginErrorPage();
    expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login error is NOT displayed').to.be.true;
});