function juiceFlavors(input) {

    let juiceMap = new Map(); 
    let buttlesMap = new Map(); 

    input.forEach(item => {
        let [juice, quantity] = item.split(" => ")
        quantity = Number(quantity); 

        if(juiceMap.has(juice)){
            let currentQuantiti = juiceMap.get(juice); 
            let newQuantiti = currentQuantiti + quantity; 
            juiceMap.set(juice, newQuantiti); 
        } else {
            juiceMap.set(juice, quantity);
        }

        if(juiceMap.get(juice) >= 1000){
            let currentQuantiti = juiceMap.get(juice);
            if(buttlesMap.has(juice)){
                let currentButtleQuantity = buttlesMap.get(juice); 
                let newButtleQuantity = currentButtleQuantity + parseInt(currentQuantiti / 1000); 
                buttlesMap.set(juice, newButtleQuantity);
                juiceMap.set(juice, currentQuantiti % 1000)
            } else {
                buttlesMap.set(juice, parseInt(currentQuantiti / 1000))
                juiceMap.set(juice, currentQuantiti % 1000)
            } 
        }
    })

    buttlesMap.forEach((value, key) => {
        console.log(key, "=>", value);
    })
    

}


let input = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

juiceFlavors(input);