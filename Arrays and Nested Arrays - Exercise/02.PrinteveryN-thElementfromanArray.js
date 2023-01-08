function solve(input, number) {
    return input.filter((item, index) => index % number === 0)
}

let input = ['5',
    '20',
    '31',
    '4',
    '20']
    ;
let number = 2
console.log(solve(input, number));