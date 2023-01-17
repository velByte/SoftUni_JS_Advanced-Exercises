function solve(input) {
    let stack = [];
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };
    input.forEach(i => {
        if (typeof i === "number") stack.push(i);
        else if (stack.length >= 2)
            stack.push(operations[i](stack.pop(), stack.pop()));
        else throw new Error("Error: not enough operands!");
    });
    if (stack.length > 1) throw new Error("Error: too many operands!");
    else return stack[0];
};