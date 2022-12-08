function solve(input) {
    let num;
    if (input === undefined) {
        num = 5;
    } else {
        num = Number(input);
    }

    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num));
    }

}

solve(1);

solve(2);
