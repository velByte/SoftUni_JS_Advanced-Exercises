function solve(input) {

    let maxArr = [];
    let x = input.length;
    for (let i = 0; i < x; i++) {
        maxArr.push(Math.max(...input[i]))
    }
    return Math.max(...maxArr)
}

let input = [[20, 50, 10],
[8, 33, 145]]
    ;

solve(input)