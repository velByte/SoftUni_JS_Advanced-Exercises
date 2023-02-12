const {expect} = require("chai");
const lookupChar = require("./charLookUp"); 


describe("Char Lookup Test", function (){
    it("Shuld return undefined if first param not string", () => {
        expect(lookupChar(true, 1)).to.be.undefined;
        expect(lookupChar(null, 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar(undefined, 1)).to.be.undefined;
    }); 
    it("Shuld return undefined if second param not number", () => {
        expect(lookupChar("string", true)).to.be.undefined; 
        expect(lookupChar("string", null)).to.be.undefined;
        expect(lookupChar("string", {})).to.be.undefined;
        expect(lookupChar("string", undefined)).to.be.undefined;
    });
    it("Shuld return Incorrect index if index greater then length", () => {
        expect(lookupChar("string", "string".length + 1)).to.be.equal("Incorrect index");
    }); 
    it("Shuld return Incorrect index if index less then 0", () => {
        expect(lookupChar("string", -1)).to.be.equal("Incorrect index");
    });
    it("Shuld return correct char", () => {
        expect(lookupChar("string", 0)).to.be.equal("s");
        expect(lookupChar("string", 1)).to.be.equal("t");
        expect(lookupChar("string", 2)).to.be.equal("r");
        expect(lookupChar("string", 3)).to.be.equal("i");
        expect(lookupChar("string", 4)).to.be.equal("n");
        expect(lookupChar("string", 5)).to.be.equal("g");
    });
    it("Shuld return undefined if index is floating point", () => {
        expect(lookupChar("string", 1.1)).to.be.undefined;
    });
    it("Shuld handle empty string", () => {
        expect(lookupChar("", 0)).to.be.equal("Incorrect index");
    });

}); 