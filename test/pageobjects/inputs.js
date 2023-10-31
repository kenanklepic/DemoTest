const { $ } = require('@wdio/globals')
const Page = require('./page');

class InputsPage extends Page {

    open () {
        return super.open('inputs');
    }

    get inputField () {
        return $('input[type=number]');
    }

    async inputNum (num) {
        await this.inputField.setValue(num);
    }

}

module.exports = new InputsPage();