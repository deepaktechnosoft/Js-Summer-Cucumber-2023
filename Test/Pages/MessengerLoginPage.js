class MessengerLoginPage {


    // locators for the webElement on MessengerLoginPage
    incorrectLoginErrorLocator = '//div[contains(text() , "Incorrect")]'
    
    
    
    // functions to interact with webElements on the MessengerLoginPage
    async isIncorrectLoginErrorDisplayed() {
        return await $(this.incorrectLoginErrorLocator).isDisplayed();
    }



}
module.exports = MessengerLoginPage;