function solve(input) {
    input.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    })

    console.log(input.join("\n"));
}

let input = ['alpha',
    'beta',
    'gamma']
    ;

solve(input);