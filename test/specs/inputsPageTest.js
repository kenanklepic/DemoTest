const { expect } = require('@wdio/globals')
const InputsPage = require('../pageobjects/inputs')

describe('Input a number into input field', () => {
    it('input a given number', async () => {
        await InputsPage.open();

        const inputValue = 33; 

        await InputsPage.inputNum(inputValue);

        const inputField = InputsPage.inputField;
        const actualValue = await inputField.getValue();

        expect(inputField).toBeExisting();
        expect(actualValue).toEqual(inputValue.toString());
    })
})