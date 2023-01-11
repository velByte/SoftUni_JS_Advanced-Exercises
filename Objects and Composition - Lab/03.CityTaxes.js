function solve(name, population, treasury) {
    class City {
        constructor(name, population, treasury) {
            this.name = name;
            this.population = Number(population);
            this.treasury = Number(treasury);
            this.taxRate = 10;
        }

        collectTaxes() {
            this.treasury = this.treasury + (this.population * this.taxRate);
        }
        applyGrowth(percentage) {
            //Increase population by given percentage
            this.population = this.population + (this.population * percentage / 100);
        }
        applyRecession(percentage) {
            //Decrease treasury by given percentage
            this.treasury = this.treasury - (this.treasury * percentage / 100);
        }
    }

    return new City(name, population, treasury)

}

let city = solve("Touruga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
