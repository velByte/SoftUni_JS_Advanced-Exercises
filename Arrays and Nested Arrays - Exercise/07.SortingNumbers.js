function solve(input) {

    let asc = input.slice(0, input.length).sort((a, b) => a - b);
    let desc = input.slice(0, input.length).sort((a, b) => b - a);
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            newArr.push(asc.shift());
        } else {
            newArr.push(desc.shift());
        }
    }

    return newArr;

}

let input = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];

solve(input);