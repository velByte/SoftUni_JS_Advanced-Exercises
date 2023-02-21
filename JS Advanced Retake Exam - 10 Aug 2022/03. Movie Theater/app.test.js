const {expect} = require('chai');

const movieTheater = require('./app');

describe("movieTheater Main Test", () => {

    it("ageRestrictions", () => {
        expect(movieTheater.ageRestrictions("G")).to.be.equal("All ages admitted to watch the movie");
        expect(movieTheater.ageRestrictions("PG")).to.be.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        expect(movieTheater.ageRestrictions("R")).to.be.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        expect(movieTheater.ageRestrictions("NC-17")).to.be.equal("No one under 17 admitted to watch the movie");
        expect(movieTheater.ageRestrictions("Z")).to.be.equal("There are no age restrictions for this movie");
        expect(movieTheater.ageRestrictions("A")).to.be.equal("There are no age restrictions for this movie");
    });

    it("moneySpent", () => {
        expect(() => movieTheater.moneySpent(5, ["Nachos"], ["Soda"])).to.not.throw("Invalid input");
        expect(() => movieTheater.moneySpent("5", ["Nachos"], ["Soda"])).to.throw("Invalid input");
        expect(() => movieTheater.moneySpent("5", ["Nachos"], ["Soda"])).to.throw("Invalid input");
        expect(() => movieTheater.moneySpent(5, ["Nachos"], "Not Arr")).to.throw("Invalid input");
        expect(() => movieTheater.moneySpent(5, ["Nachos"])).to.throw("Invalid input");
        expect(movieTheater.moneySpent(1, ["Nachos"], ["Soda"])).to.be.equal("The total cost for the purchase is 23.50")
        expect(movieTheater.moneySpent(2, ["Nachos", "Nachos", "Popcorn"], ["Soda", "Soda"])).to.be.equal("The total cost for the purchase with applied discount is 41.20")
    });

    it("reservation", () => {
        expect(() => movieTheater.reservation([], 1)).to.not.throw("Invalid input");
        expect(() => movieTheater.reservation("[]", 1)).to.throw("Invalid input");
        expect(() => movieTheater.reservation([], "1")).to.throw("Invalid input");
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 4)).to.be.equal(2);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.be.equal(2);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 6)).to.be.equal(1);
    });
})