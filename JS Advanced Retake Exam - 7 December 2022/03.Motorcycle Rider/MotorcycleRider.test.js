const {expect} = require('chai');

const motorcycleRider = require('./motorcycleRider');

describe("Motorcycle Rider", function() {
    it("licenseRestriction", () => {
        expect(motorcycleRider.licenseRestriction("AM")).to.be.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        expect(motorcycleRider.licenseRestriction("A1")).to.be.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        expect(motorcycleRider.licenseRestriction("A2")).to.be.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        expect(motorcycleRider.licenseRestriction("A")).to.be.equal("No motorcycle restrictions, and the minimum age is 24.");
        expect(() => motorcycleRider.licenseRestriction("A3")).to.throw("Invalid Information!");
        expect(() => motorcycleRider.licenseRestriction("5")).to.throw("Invalid Information!");
    })
    it("motorcycleShowroom", () => {
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("1")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(undefined)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction({})).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction([])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("AM A1 A2 A")).to.throw("Invalid Information!");
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600", "750", "800", "850"], 600)).to.be.equal("There are 3 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600", "750", "800", "850"], 100)).to.be.equal("There are 0 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([300,40,20,50,"five", -6], 600)).to.equal('There are 2 available motorcycles matching your criteria!');
            expect(() => motorcycleRider.motorcycleShowroom([], 600)).to.throw("Invalid Information!")
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600", "750", "800", "850"], "600")).to.throw("Invalid Information!")
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600", "750", "800", "850"],)).to.throw("Invalid Information!")
            
    });
    it("otherSpendings", () => {
        expect(() => motorcycleRider.otherSpendings("[100, 200]", "[]" ,true)).to.throw('Invalid Information!');
        expect(() => motorcycleRider.otherSpendings([100, 200], [500], true)).to.not.throw("Invalid Information!");
        expect(() => motorcycleRider.otherSpendings([100, 200], true)).to.throw("Invalid Information!");
        expect(() => motorcycleRider.otherSpendings([100, 200], "[]" ,true)).to.throw("Invalid Information!");
        expect(() => motorcycleRider.otherSpendings("[100, 200]", [] ,true)).to.throw("Invalid Information!");
        expect(() => motorcycleRider.otherSpendings([100, 200], [] ,"true")).to.throw("Invalid Information!");
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).to.be.equal("You spend $540.00 for equipment and consumables with 10% discount!");
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.be.equal("You spend $600.00 for equipment and consumables!");
    })
});
     
