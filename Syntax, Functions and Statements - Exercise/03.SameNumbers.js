function solve(number, digit = number % 10, sum = number.toString().split('').reduce((a, b) => Number(a) + Number(b), 0)) {
    if (number == 0) {
        console.log(true);
        console.log(sum);
        return;
    }
    if (number % 10 != digit) {
        console.log(false);
        console.log(sum);
        return;
    }
    return solve(Math.floor(number / 10), digit, sum);
}

solve(2222222)