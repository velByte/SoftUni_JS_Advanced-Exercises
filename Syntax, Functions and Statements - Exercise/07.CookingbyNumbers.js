function solve(num, param1, param2, param3, param4, param5) {

    num = Number(num);

    let actions = {
        "chop": () => num /= 2,
        "dice": () => num = Math.sqrt(num),
        "spice": () => num++,
        "bake": () => num *= 3,
        "fillet": () => num -= num * 0.2
    }

    let comm = [param1, param2, param3, param4, param5];

    comm.forEach(item => {

        actions[item]();

        console.log(num);
    })




}