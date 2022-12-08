function solve(input) {

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let x = input.length;
    for (let i = 0; i < x; i++) {
        mainDiagonal += input[i][i];
        secondaryDiagonal += input[i][x - i - 1];
    }
    console.log(mainDiagonal, secondaryDiagonal);
    
}

let input = [[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
    ;

solve(input)