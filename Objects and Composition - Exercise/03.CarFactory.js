function solve(obj) {

    let result = {
        model: obj.model,
    }

    let engine = {
        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        },
    }
    let getProperEngine = (requirement) => {
        if (requirement <= 90) {
            return "small";
        } else if (requirement <= 120) {
            return "normal";
        } else {
            return "monster";
        }
    }

    result["engine"] = engine[getProperEngine(obj.power)];
    result["carriage"] = {
        type: obj.carriage,
        color: obj.color
    }
    let wheels = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    result["wheels"] = new Array(4).fill(wheels);
    return result;
}


let obj = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}


console.log(solve(obj)); 