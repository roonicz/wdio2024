
describe('Demo Test', function () {

    it('My First Test', async () => {

        await browser.url('https://www.google.com')
        await $('[name="q"]').setValue("Try Wdio")
        browser.keys('Enter')
        browser.pause(5500)
        //await $('[name="btnK"]').click()



    })
})