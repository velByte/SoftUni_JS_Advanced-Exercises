const {expect} = require('chai');

const chooseYourCar = require('./chooseYourCar.js');

describe("chooseYourCar Main Test", () => {

    it("choosingType", () => {
        expect(() => chooseYourCar.choosingType("type","color", 1899)).to.throw("Invalid Year!")
        expect(() => chooseYourCar.choosingType("type","color", 2023)).to.throw("Invalid Year!")
        expect(() => chooseYourCar.choosingType("type","color", 1999)).to.throw("This type of car is not what you are looking for.")
        expect(() => chooseYourCar.choosingType("Sedan","color", 1999)).to.not.throw()
        expect(chooseYourCar.choosingType("Sedan","red", 2010)).to.be.equal("This red Sedan meets the requirements, that you have.")
        expect(chooseYourCar.choosingType("Sedan","red", 2009)).to.be.equal("This Sedan is too old for you, especially with that red color.")
    });
    
    it("brandName", () => {
        expect(() => chooseYourCar.brandName()).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName("array", 5)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota"], "5")).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota"],)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota"], 1.2)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota"], -1)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota"], 0)).to.not.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota"], 2)).to.throw("Invalid Information!")
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.be.equal(["Toyota", "Peugeot"].join(", "))
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.be.equal(["BMW", "Toyota"].join(", "))
        expect(chooseYourCar.brandName(["BMW"], 0)).to.be.equal([].join(", "))
    });

    it("carFuelConsumption", () => {
        expect(() => chooseYourCar.carFuelConsumption()).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(0, 50)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(50, 0)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(-1, 50)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(50, -1)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption("50", 50)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(50, "50")).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption("50", "50")).to.throw("Invalid Information!")

        expect(chooseYourCar.carFuelConsumption(120, 8)).to.be.equal("The car is efficient enough, it burns 6.67 liters/100 km.")
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
        expect(chooseYourCar.carFuelConsumption(100, 6.99)).to.be.equal("The car is efficient enough, it burns 6.99 liters/100 km.")
        expect(chooseYourCar.carFuelConsumption(100, 7.01)).to.be.equal("The car burns too much fuel - 7.01 liters!")
        expect(chooseYourCar.carFuelConsumption(135, 15)).to.be.equal("The car burns too much fuel - 11.11 liters!")
    });

})