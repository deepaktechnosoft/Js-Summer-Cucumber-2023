const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const moment = require("moment");

const landingPage = new LandingPage();


Then(/^I verify past dates in current month are disabled$/, async function () {
    /*
        1. get the currentmonth currentyear using moment-library
        2. get the current date
        3. go to the current month calendar
        4. if current date is > 1
                then verify disbaled dates are having disabled-attribute
    */

    const currentMonthYear = moment().format('MMMM yyyy');
    const currentDate = moment().format('D');
    await landingPage.goToCalendar(currentMonthYear);
    const disabledDateCount = await landingPage.getDisabledDatesCount(currentMonthYear);
    expect(currentDate - 1, 'Number of disbaled dates are not as expected').to.be.equal(disabledDateCount)

});