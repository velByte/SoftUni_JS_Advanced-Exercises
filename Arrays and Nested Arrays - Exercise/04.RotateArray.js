function solve(input, rotation) {
    for (let i = 0; i < rotation; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(" "));
}

let input = ['1',
    '2',
    '3',
    '4']
    ;

solve(input, 2);