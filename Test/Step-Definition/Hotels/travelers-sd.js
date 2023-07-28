const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const { expect } = require("chai");

const landingPage = new LandingPage();
let adultCount = 0, childrenCount = 0;

When(/^I change (.+) count to (.+)$/, async function (field, count) {
    switch (field) {
        case 'adults':
            await landingPage.selectAdults(count);
            adultCount = count;
            break;
        case 'children':
            await landingPage.selectChildren(count);
            childrenCount = count;
            break;
        default:
            break;
    }
    await browser.pause(2000);
})

When(/^I select child-(.+) age as (.+)$/, async function (childNum, childAge) {
    await landingPage.selectChildAge(childNum, childAge);
    await browser.pause(5000)
});

When(/^I click on Done button on travelers$/, async function () {
    await landingPage.clickTravelersDoneButton();
    await browser.pause(5000);
});

Then(/^I verify the travelers count is updated correctly$/, async function () {
    const travelersCountOnWeb = Number(await landingPage.getTravelersCount());
    const travelerCountExpected = Number(adultCount) + Number(childrenCount);
    expect(travelersCountOnWeb, 'Travelers count is not as expected').to.be.equal(travelerCountExpected);
});