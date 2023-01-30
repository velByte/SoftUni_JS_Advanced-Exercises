function solve() {

    let p = document.querySelector('#exercise p');
    let checkBtn = document.querySelector('#exercise button');
    let clearBtn = document.querySelector('#exercise button:nth-child(2)');


    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check() {
        const box2d = getMatrixValues();
        const isValid = isValidSudokuBox(box2d)
        const tabel = document.querySelector("table");
        if (isValid) {
            tabel.style.border = "2px solid green";
        } else {
            tabel.style.border = "2px solid red";
        }
        p.style.color = isValid ? "green" : "red";
        p.textContent = `${isValid ? "You solve it! Congratulations!" : "NOP! You are not done yet..."}`

    }

    function getMatrixValues() {
        const inputElements = document.querySelectorAll("input[type='number']");
        // let matrix = [[], [], []];
        let matrix = [[], [], []].map(() => []);
        let row = 0, col = 0;

        for (const input of inputElements) {
            if (!isNaN(input.value)) {
                matrix[row][col] = input.value;
                col++;
            } else {
                return undefined;
            }
            if (col === 3) {
                col = 0;
                row++;
            }
        }
        return matrix;
    }

    function clear() {
        const tabel = document.querySelector("table");
        tabel.removeAttribute("style")
        const inputs = document.querySelectorAll("tbody input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        document.querySelector("#check > p").textContent = ""
        document.querySelector("#check > p").removeAttribute("style")
    }

    function isValidSudokuBox(box) {
        for (let i = 0; i < box.length; i++) {
            for (let j = 0; j < box[i].length; j++) {

                if (box[i][j] === undefined) {
                    return false;
                }

                if (box[i][j] < 1 || box[i][j] > 3) {
                    return false;
                }

                if (!isNumberUnique(box, i, j)) {
                    return false;
                }
            }
        }
        return true;
    }
    function isNumberUnique(matrix, row, col) {
        let number = matrix[row][col];
        for (let i = 0; i < matrix.length; i++) {
            if (i !== row && matrix[i][col] === number) {
                return false;
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            if (i !== col && matrix[row][i] === number) {
                return false;
            }
        }
        return true;
    }
}