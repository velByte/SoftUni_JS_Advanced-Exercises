function solve(input) {
    let result = new Array();
    input.forEach((item) => {
        if (item < 0) {
            result.unshift(item);
        } else {
            result.push(item);
        }
    })
   console.log(result.join("\n"));
}

let input = [7, -2, 8, 9];

solve(input)