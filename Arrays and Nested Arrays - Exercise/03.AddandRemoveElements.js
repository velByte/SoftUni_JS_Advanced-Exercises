function solve(input) {
    let number = 0;
    let result = [];

    input.forEach(item => {
        ++number;

        if (item === "add") {
            result.push(number);
        } else {
            result.pop();
        }

    })

    if (result.length != 0) {
        console.log(result.join("\n"));
    } else {
        console.log("Empty");
    }

}

let input = ['add',
    'add',
    'remove',
    'add',
    'add']


solve(input);