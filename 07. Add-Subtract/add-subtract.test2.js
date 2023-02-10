const {expect} = require('chai');
const createCalculator = require('./add-subtract.js');


describe("Calculator", function () {
    let calc = null; 
    beforeEach(() => {
        calc = createCalculator();
    })
})