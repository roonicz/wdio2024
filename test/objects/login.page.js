class LoginPage {

    get usernameTextbox() {
        return $('#username')
    }

    get passwordtextbox() {
        return $('#password')
    }

    get loginbutton() {
        return $('button[type="submit"]')
    }

    get loginsuccessmessage() {
        
        return ($('#flash'))
        

    }

    async login(username, password) {
        await this.usernameTextbox.setValue(username)
        await this.passwordtextbox.setValue(password)
        await this.loginbutton.click()
        //await expect(this.loginsuccessmessage).toHaveText(msg)
        
    }

    async checkMessage(){
        console.log("Arun")
        console.log(this.loginsuccessmessage.getText());
        console.log("Arun1")
        //await expect (this.loginsuccessmessage).toHaveText('You logged into a secure area!')
    }
}

export default new LoginPage();