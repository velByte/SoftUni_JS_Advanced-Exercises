function solve(input) {

    let newArr = [];
    input.reduce((acc, curr) => {

        if (newArr.length == 0) {
            newArr.push(acc);
        }

        if (curr >= acc) {
            newArr.push(curr);
            return curr;
        }
        return acc;
    })

    return newArr;
}

let input = [1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]




solve(input);