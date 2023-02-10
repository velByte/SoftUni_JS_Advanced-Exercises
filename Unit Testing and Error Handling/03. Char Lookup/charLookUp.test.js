const {expect} = require("chai");
const charLookUp = require("./charLookUp"); 


describe("Char Lookup Test", function (){
    it("Shuld return undefined if first param not string", () => {
        expect(charLookUp(true, 1)).to.be.undefined;
        expect(charLookUp(null, 1)).to.be.undefined;
        expect(charLookUp({}, 1)).to.be.undefined;
        expect(charLookUp(undefined, 1)).to.be.undefined;
    }); 
    it("Shuld return undefined if second param not number", () => {
        expect(charLookUp("string", true)).to.be.undefined; 
        expect(charLookUp("string", null)).to.be.undefined;
        expect(charLookUp("string", {})).to.be.undefined;
        expect(charLookUp("string", undefined)).to.be.undefined;
    });
    it("Shuld return Incorrect index if index greater then length", () => {
        expect(charLookUp("string", "string".length + 1)).to.be.equal("Incorrect index");
    }); 
    it("Shuld return Incorrect index if index less then 0", () => {
        expect(charLookUp("string", -1)).to.be.equal("Incorrect index");
    });
    it("Shuld return correct char", () => {
        expect(charLookUp("string", 0)).to.be.equal("s");
        expect(charLookUp("string", 1)).to.be.equal("t");
        expect(charLookUp("string", 2)).to.be.equal("r");
        expect(charLookUp("string", 3)).to.be.equal("i");
        expect(charLookUp("string", 4)).to.be.equal("n");
        expect(charLookUp("string", 5)).to.be.equal("g");
    });
    it("Shuld return undefined if index is floating point", () => {
        expect(charLookUp("string", 1.1)).to.be.undefined;
    });
    it("Shuld handle empty string", () => {
        expect(charLookUp("", 0)).to.be.equal("Incorrect index");
    });

}); 