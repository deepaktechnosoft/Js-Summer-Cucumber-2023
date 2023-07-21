const { When } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");

const landingPage = new LandingPage();

When(/^I change (.+) count to (.+)$/, async function (field, count) {
    switch (field) {
        case 'adults':
            await landingPage.selectAdults(count);
            break;
        case 'children':
            await landingPage.selectChildren(count);
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