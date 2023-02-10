const {expect} = require('chai');
const createCalculator = require('./add-subtract.js');


describe("Add Subtract Main Tests", function() {
    
    let calc = null; 

    beforeEach(()=> {
        calc = createCalculator();
    });
    
    

    it("Returns a object", () =>  {
        expect(calc).to.be.instanceOf(Object)
    }); 
    it("Returns a object with add property of type Function", () =>  {
        expect(calc).to.haveOwnProperty("add");
        expect(calc.add).to.be.a("function")
    }); 
    it("Returns a object with subtract property of type Function", () =>  {
        expect(calc).to.haveOwnProperty("subtract");
        expect(calc.subtract).to.be.a("function")
    }); 
    it("Returns a object with get property of type Function", () =>  {
        expect(calc).to.haveOwnProperty("get");
        expect(calc.get).to.be.a("function")
        
    }); 
    it("Add works", () =>  {
        calc.add(5); 
        calc.add(10); 
        let expectet = 15; 
        let actual = calc.get(); 
        expect(actual).equals(expectet);
    }); 
    it("Add() can parse String as Number", () =>  {
        calc.add("5"); 
        calc.add("10"); 
        let expectet = 15; 
        let actual = calc.get(); 
        expect(actual).equals(expectet);
    }); 

    it("Subtract works", () => {
        calc.subtract(5); 
        calc.subtract(10); 
        let expectet = -15; 
        let actual = calc.get(); 
        expect(actual).equals(expectet);
    });

    it("Subtract() can parse String as Number", () =>  {
        calc.subtract("5"); 
        calc.subtract("10"); 
        let expectet = -15; 
        let actual = calc.get(); 
        expect(actual).equals(expectet);
    }); 
   
    it("Returns the internal sum with the get() function", () =>{
        let expectet = 0; 
        let actual = calc.get(); 
        expect(actual).equals(expectet);
    })

});