class MessengerLandingPage {


    // locators for the webElement on MessengerLandingPage
    loginBtnLocator = '#loginbutton'
    
    
    
    // functions to interact with webElements on the MessengerLandingPage
    async clickLogInButton() {
        await $(this.loginBtnLocator).click()
    }



}
module.exports = MessengerLandingPage;