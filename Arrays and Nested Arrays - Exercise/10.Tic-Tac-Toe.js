function solve(input) {

    let matrix = new Array(3).fill(0).map(() => new Array(3).fill(false));
    let player = 'X';
    let winner = false;

    let freeSpots = matrix.length * matrix.length;
    function checkRows(matrix, player) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].every(x => x === player)) {
                return true;
            }
        }
        return false;
    }

    function checkCols(matrix, player) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix.every(x => x[i] === player)) {
                return true;
            }
        }
        return false;
    }

    function checkDiagonals(matrix, player) {
        if (matrix[0][0] === player && matrix[1][1] === player && matrix[2][2] === player) {
            return true;
        }

        if (matrix[0][2] === player && matrix[1][1] === player && matrix[2][0] === player) {
            return true;
        }

        return false;
    }


    let index = 0;

    while (index < input.length) {
        let [row, col] = input[index].split(' ').map(Number);
        if (matrix[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            index++;
            continue;
        }

        matrix[row][col] = player;
        freeSpots--;
        if (freeSpots === 0) {
            break;
        }

        if (checkRows(matrix, player) || checkCols(matrix, player) || checkDiagonals(matrix, player)) {
            console.log(`Player ${player} wins!`);
            winner = true;
            break;
        }

        player = player === 'X' ? 'O' : 'X';

        index++;
    }


    if (!winner) {
        console.log('The game ended! Nobody wins :(');
    }

    matrix.forEach(x => console.log(x.join('\t')));

}

let input = ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0",]
    ;

solve(input);


