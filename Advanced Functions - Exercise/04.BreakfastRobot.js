function breakfastRobot(){

    const stock = {
        protein: 0, 
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const instructions = {
        restock: (arg) => {
            let [microelement, quantity] = arg; 
            quantity = Number(quantity);
            if (stock.hasOwnProperty(`${microelement}`)){
                let current = stock[microelement]; 
                let newQuantity = quantity + current; 
                stock[microelement] = newQuantity; 
            } else {
                stock[microelement] = quantity; 
            }
            return "Success"
        },
        prepare: (arg) => {
            let [recipes, quantity] = arg; 
            quantity = Number(quantity);
            let recipeItems = Object.keys(recipe[recipes]);
            for (let i = 0; i < recipeItems.length; i++){
                let isInstok = stock[recipeItems[i]] != undefined; 
                let isEnough = stock[recipeItems[i]] > (recipe[recipes][recipeItems[i]] * quantity); 
                if(!(isInstok && isEnough)) {return `Error: not enough ${recipeItems[i]} in stock`}
                else {stock[recipeItems[i]] = stock[recipeItems[i]]-(recipe[recipes][recipeItems[i]] * quantity)}
            }
            return "Success"
        },
        report: () => {
            return `protein=${stock["protein"]} carbohydrate=${stock["carbohydrate"]} fat=${stock["fat"]} flavour=${stock["flavour"]}`
        }
    }


    const recipe = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        }, 
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {   
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    return function (input) {
        let [cmd, ...arg] = input.split(" "); 
        return instructions[cmd](arg);
    }

}

let manager = breakfastRobot();
console.log(manager("restock flavour 50"));
console.log (manager ("prepare lemonade 4")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 

