const { expect } = require("chai");
const mathEnforcer = require("./mathEnforcer");

describe("Math Enforcer Test", function () {
  let calc = undefined;
  beforeEach(function () {
    calc = mathEnforcer;
  });
  // addFive
  describe("addFive", function () {
    it("Shuld hat addFive key with function as value", () => {
      expect(calc.addFive).to.be.a("function");
    });
    it("AddFive should return undefined if parameter is not a number", () => {
      expect(calc.addFive()).to.be.undefined;
      expect(calc.addFive("")).to.be.undefined;
      expect(calc.addFive("5")).to.be.undefined;
      expect(calc.addFive([5])).to.be.undefined;
      expect(calc.addFive({ num: 5 })).to.be.undefined;
      expect(calc.addFive(undefined)).to.be.undefined;
      expect(calc.addFive(null)).to.be.undefined;
      expect(calc.addFive(true)).to.be.undefined;
      expect(calc.addFive(false)).to.be.undefined;
    });
    it("AddFive should return correct result if parameter is a number", () => {
      expect(calc.addFive(5)).to.equal(10);
      expect(calc.addFive(-5)).to.equal(0);
      expect(calc.addFive(0)).to.equal(5);
      expect(calc.addFive(5.5)).to.equal(10.5);
      expect(calc.addFive(-5.5)).to.equal(-0.5);
    });
  });

  describe("subtractTen", function () {
    it("Shuld hat subtractTen key with function as value", () => {
      expect(calc.subtractTen).to.be.a("function");
    });
    it("subtractTen should return undefined if parameter is not a number", () => {
      expect(calc.subtractTen()).to.be.undefined;
      expect(calc.subtractTen("")).to.be.undefined;
      expect(calc.subtractTen("5")).to.be.undefined;
      expect(calc.subtractTen([5])).to.be.undefined;
      expect(calc.subtractTen({ num: 5 })).to.be.undefined;
      expect(calc.subtractTen(undefined)).to.be.undefined;
      expect(calc.subtractTen(null)).to.be.undefined;
      expect(calc.subtractTen(true)).to.be.undefined;
      expect(calc.subtractTen(false)).to.be.undefined;
    });
    it("subtractTen should return correct result if parameter is a number", () => {
      expect(calc.subtractTen(5)).to.equal(-5);
      expect(calc.subtractTen(-5)).to.equal(-15);
      expect(calc.subtractTen(0)).to.equal(-10);
      expect(calc.subtractTen(5.5)).to.equal(-4.5);
      expect(calc.subtractTen(-5.5)).to.equal(-15.5);
    });
  });

  describe("sum", function () {
    it("Shuld hat sum key with function as value", () => {
      expect(calc.sum).to.be.a("function");
    });
    it("sum should return undefined if first parameter is not a number", () => {
      expect(calc.sum("5", 5)).to.be.undefined;
      expect(calc.sum("5")).to.be.undefined;
      expect(calc.sum([5], 5)).to.be.undefined;
      expect(calc.sum({ num: 5 }, 5)).to.be.undefined;
      expect(calc.sum(undefined, 5)).to.be.undefined;
      expect(calc.sum(null, 5)).to.be.undefined;
      expect(calc.sum(true, 5)).to.be.undefined;
      expect(calc.sum(false, 5)).to.be.undefined;
    });
    it("sum should return undefined if second parameter is not a number", () => {
      expect(calc.sum(5, "5")).to.be.undefined;
      expect(calc.sum("5")).to.be.undefined;
      expect(calc.sum(5, [5])).to.be.undefined;
      expect(calc.sum(5, { num: 5 })).to.be.undefined;
      expect(calc.sum(5, undefined)).to.be.undefined;
      expect(calc.sum(5, null)).to.be.undefined;
      expect(calc.sum(5, true)).to.be.undefined;
      expect(calc.sum(5, false)).to.be.undefined;
      expect(calc.sum(5)).to.be.undefined;
    });
    it("sum should return correct result if both parameters are numbers", () => {
      expect(calc.sum(5, 5)).to.equal(10);
      expect(calc.sum(-5, 5)).to.equal(0);
      expect(calc.sum(0, 5)).to.equal(5);
      expect(calc.sum(5.5, 5)).to.equal(10.5);
      expect(calc.sum(-5.5, 5)).to.equal(-0.5);
      //In the case of floating-point numbers, the result should be considered correct if it is within 0.01 of the correct value
      expect(calc.sum(5.5, 5.5)).to.be.closeTo(11, 0.01);
    });
  });
});
