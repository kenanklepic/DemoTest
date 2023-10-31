const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Login with invalid password', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', '123')
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'Your password is invalid!')
    })
})
