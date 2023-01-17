function solve(input) {

    let resultMap = new Map();

    input.forEach(item => {
        let [townName, productName, price] = item.split(" | ");
        price = Number(price);

        if (resultMap.has(productName)) {
            let current = resultMap.get(productName).price;
            if (price < current) {
                resultMap.set(productName, {
                    townName: townName,
                    price: price
                })
            }
        } else {
            resultMap.set(productName, {
                townName: townName,
                price: price
            })
        }
    })

    resultMap.forEach((value, key) => {
        console.log(`${key} -> ${value.price} (${value.townName})`);
    })
}

let input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']

solve(input)

