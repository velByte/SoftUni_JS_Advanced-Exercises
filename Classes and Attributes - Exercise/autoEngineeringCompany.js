function autoEngineeringCompany(input) {

    let carBrandCollection = new Map(); 
    
    input.forEach(item => {
        let [carBrand, carModel, producedCars] = item.split(" | ");
        producedCars = Number(producedCars); 

        if(carBrandCollection.has(carBrand)){
            let currentCarBrandMap = carBrandCollection.get(carBrand); 
            if(currentCarBrandMap.has(carModel)){
                let currentModelQuantity = currentCarBrandMap.get(carModel); 
                let newModelQuantity = currentModelQuantity + producedCars; 
                currentCarBrandMap.set(carModel, newModelQuantity);
            } else {
                currentCarBrandMap.set(carModel, producedCars);
            }
        } else {
            let newCarModelMap = new Map(); 
            newCarModelMap.set(carModel, producedCars); 
            carBrandCollection.set(carBrand, newCarModelMap); 
        }
    })

    carBrandCollection.forEach((modelMap, brand) => {
        console.log(brand);
        modelMap.forEach((value, key) => {
            console.log(`###${key} -> ${value}`);
        })
    })

}


let input = ['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']

autoEngineeringCompany(input)