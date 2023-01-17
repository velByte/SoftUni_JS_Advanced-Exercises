function solve(input) {

    let resultRawMap = new Map();

    input.forEach(item => {
        let [product, price] = item.split(" : ");
        price = Number(price);
        resultRawMap.set(product, price);
    })

    let formatedMap = new Map([...resultRawMap.entries()].sort((a, b) => {
        return a[0].localeCompare(b[0])
    }))

    let letter = "";

    formatedMap.forEach((value, key) => {
        if (letter != key[0]) {
            console.log(key[0]);
            letter = key[0]
        }
        console.log(`  ${key}: ${value}`);
    })
}

let input = ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']

solve(input)