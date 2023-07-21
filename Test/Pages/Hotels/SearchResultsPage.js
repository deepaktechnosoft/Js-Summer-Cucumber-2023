class SearchResultsPage {

    // locators for elements on SearchResults Page
    goingToLocator = '//button[@data-stid="destination_form_field-menu-trigger"]';



    // functions to interact with elements on SearchResults Page
    async getGoingToText() {
        return await $(this.goingToLocator).getText();
    }



}
module.exports = SearchResultsPage