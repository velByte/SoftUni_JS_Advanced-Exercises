function solve(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            newArr.unshift(input[i] * 2)
        }
    }
    console.log(...newArr);
}

let input = [10, 15, 20, 25];

solve(input)