class LandingPage {
    // locators for elements on Landing Page
    destinationInputTriggerLocator = '//button[@aria-label = "Going to"]';
    destinationInputLocator = "#destination_form_field";

    //Search AutoSuggestion
    searchSuggestionsLocator =
        '//button[@data-stid="destination_form_field-result-item-button"]';

    // Travelers
    travelerInputTriggerLocator = '//button[@data-stid = "open-room-picker"]';
    plusAdultsLocator =
        '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
    minusAdultsLocator =
        '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button';
    adultsCountLocator = "#traveler_selector_adult_step_input-0";

    plusChildrenLocator =
        '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    minusChildrenLocator =
        '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    childrenCountLocator = "#traveler_selector_children_step_input-0";

    childAgeDropdownLocator_starts = '//select[@id="age-traveler_selector_children_age_selector-0-';
    childAgeDropdownLocator_ends = '"]';

    travelersDoneButtonLocator = "#traveler_selector_done_button";

    searchButtonLocator = "#search_button";

    // functions to interact with elements on Landing Page
    async enterDestination(destinationString) {
        await $(this.destinationInputTriggerLocator).click();
        await $(this.destinationInputLocator).setValue(destinationString);
    }

    async selectFromAutoSuggestion(searchThis) {
        await browser.pause(5000);
        const allSuggestions = await $$(this.searchSuggestionsLocator);
        for (const suggestion of allSuggestions) {
            const suggestionData = await suggestion.getAttribute("aria-label");
            if (suggestionData.startsWith(searchThis)) {
                await suggestion.click();
                break;
            }
        }
    }

    async clickSearchButton() {
        await $(this.searchButtonLocator).click();
    }

    async getAdultCount() {
        return await $(this.adultsCountLocator).getAttribute("value");
    }

    async getChildrenCount() {
        return await $(this.childrenCountLocator).getAttribute("value");
    }

    async selectAdults(expAdultCount) {
        if (!(await $(this.travelersDoneButtonLocator).isDisplayed())) {
            await $(this.travelerInputTriggerLocator).click();
        }
        await browser.pause(1000);
        for (let i = 0; i < 10; i++) {
            const adultCount = await this.getAdultCount();
            if (Number(adultCount) < Number(expAdultCount)) {
                await $(this.plusAdultsLocator).click();
            } else if (Number(adultCount) > Number(expAdultCount)) {
                await $(this.minusAdultsLocator).click();
            } else {
                break;
            }
            await browser.pause(1000);
        }
    }

    async selectChildren(expChildrenCount) {
        if (!(await $(this.travelersDoneButtonLocator).isDisplayed())) {
            await $(this.travelerInputTriggerLocator).click();
        }
        await browser.pause(1000);
        for (let i = 0; i < 10; i++) {
            const childrenCount = await this.getChildrenCount();
            if (Number(childrenCount) < Number(expChildrenCount)) {
                await $(this.plusChildrenLocator).click();
            } else if (Number(childrenCount) > Number(expChildrenCount)) {
                await $(this.minusChildrenLocator).click();
            } else {
                break;
            }
            await browser.pause(1000);
        }
    }

    async selectChildAge(childNum, childAge) {
        childNum = Number(childNum) - 1;
        const childAgeLocator = this.childAgeDropdownLocator_starts + childNum + this.childAgeDropdownLocator_ends;
        const childAgeDropdown = await $(childAgeLocator);
        childAgeDropdown.selectByVisibleText(childAge);
    }

    async clickTravelersDoneButton() {
        await $(this.travelersDoneButtonLocator).click();
    }

}
module.exports = LandingPage;
