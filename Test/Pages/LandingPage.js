class LandingPage {


    // locators for the webElement on LandingPage
    messengerLinkLocator = '=Messenger'
    loginEmailLocator = '#email'
    loginPwdLocator = '#pass'
    loginBtnLocator = '<button>'
    
    
    
    // functions to interact with webElements on the LandingPage
    async clickMessenger() {
        await $(this.messengerLinkLocator).click()
    }

    async isLoginUsernameEnabled() {
        return await $(this.loginEmailLocator).isEnabled()
    }

    async isLoginPasswordEnabled() {
        return await $(this.loginPwdLocator).isEnabled()
    }

    async isLoginButtonEnabled() {
        return await $(this.loginBtnLocator).isEnabled()
    }

    async enterLoginEmail(loginEmail) {
        await $(this.loginEmailLocator).setValue(loginEmail)
    }

    async enterLoginPassword(loginPwd) {
        await $(this.loginPwdLocator).setValue(loginPwd)
    }

    async clickLoginButton() {
        await $(this.loginBtnLocator).click();
    }



}
module.exports = LandingPage;