function solve(input) {
    let num = 0;
    input.sort((a, b) => a.localeCompare(b));
    input.forEach(element => {
        console.log(`${++num}.${element}`);
    });
}

let input = ["John", "Bob", "Christina", "Ema"];

solve(input);