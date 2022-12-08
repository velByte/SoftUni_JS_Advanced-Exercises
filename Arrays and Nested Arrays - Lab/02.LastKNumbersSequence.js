function solve(n, k) {

    let arr = [1];


    for (let i = 1; i < n; i++) {

        arr.push(getLastKcount(i, k));

    }

    function getLastKcount(index, k) {
        let sum = 0;
        for (let i = index - 1; i >= index - k; i--) {
            if (i >= 0 && arr[i] != undefined) {
                sum += arr[i]
            }
        }
        return sum;
    }
    return arr;
}

let n = 8;
let k = 2;

solve(n, k)