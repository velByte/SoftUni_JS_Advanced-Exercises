function solve(input) {

    let result = [];

    input.forEach(item => {
        let [name, level, items] = item.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : []
        result.push({
            name,
            level,
            items
        })
    })
    console.log(JSON.stringify(result));
}

let input = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / dsf ff'];

solve(input);
