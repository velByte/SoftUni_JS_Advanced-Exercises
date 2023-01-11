function solve(input) {

    let res = new Map();

    input.forEach(item => {
        let [townName, population] = item.split(" <-> ");
        population = Number(population);
        if (res.has(townName)) {
            let current = Number(res.get(townName));
            res.set(townName, current + population)
        } else {
            res.set(townName, population)
        }

    })

    res.forEach((value, key) => {
        console.log(key, ":", value);
    })
}

let input = ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']

solve(input)