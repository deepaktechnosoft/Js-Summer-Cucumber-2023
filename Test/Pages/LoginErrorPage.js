class LoginErrorPage {


    // locators for the webElement on LoginErrorPage
    loginErrorLocator = 'div*=email or mobile number'
    
    
    
    // functions to interact with webElements on the LoginErrorPage
    async isLoginErrorDisplayed() {
        return await $(this.loginErrorLocator).isDisplayed()
    }



}
module.exports = LoginErrorPage;