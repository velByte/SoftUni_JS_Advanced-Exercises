function solve(input) {

    let matrix = input.map(x => x.split(' ').map(Number));

    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumDiagonal1 += matrix[i][i];
        sumDiagonal2 += matrix[i][matrix.length - 1 - i];
    }

    if (sumDiagonal1 === sumDiagonal2) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && j !== matrix.length - 1 - i) {
                    matrix[i][j] = sumDiagonal1;
                }
            }
        }
    }
    matrix.forEach(x => console.log(x.join(' ')));
}

let input = ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
    ;

solve(input);