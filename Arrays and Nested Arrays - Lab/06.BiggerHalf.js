function solve(input) {

    input = input.sort((a, b) => a - b)
    let half = Math.floor(input.length / 2);
    input.splice(0, half);
    return input;
}

let input = [4, 7, 2, 5];

solve(input)