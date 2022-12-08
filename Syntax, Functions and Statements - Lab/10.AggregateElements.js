function solve(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverseSum = input.reduce((a, b) => a + 1 / b, 0);
    let concat = input.join('');
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}