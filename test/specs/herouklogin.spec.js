import loginPage from '../objects/login.page'

describe('Herouklogintest', function () {

    it('LoginTest', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        //await browser.pause(5000)
        await loginPage.login('tomsmith', 'SuperSecretPassword!')
        
        await loginPage.checkMessage()
        await browser.pause(5000)

    })
})