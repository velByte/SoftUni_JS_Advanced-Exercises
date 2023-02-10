const {expect} = require("chai");
const isOddOrEven = require("./isOddOrEven")


describe("2. Even of Odd", function () {
    
    it("Return undefined if input object", () => {
        expect(isOddOrEven({})).to.equals(undefined)
    });
    it("Return undefined if input array", () => {
        expect(isOddOrEven(["Test String"])).to.equals(undefined)
    });
    it("Return undefined if input null", () => {
        expect(isOddOrEven(null)).to.equals(undefined)
    });
    it("Return undefined if input bool", () => {
        expect(isOddOrEven(true)).to.equals(undefined)
    });
    it("Return undefined if no input", () => {
        expect(isOddOrEven()).to.equals(undefined)
    });
    it("Return even if input empty string", () => {
        expect(isOddOrEven("")).to.equals("even")
    });
    it("Return odd if input 1", () => {
        expect(isOddOrEven("1")).to.equals("odd")
    });
    it("multiple different strings ", () => {
        expect(isOddOrEven("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")).to.equals("odd")
    });


})