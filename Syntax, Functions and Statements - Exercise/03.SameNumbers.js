function solve(number) {
    let numArr = number.toString().split("");
    let arrSum = 0; 
    for (let i = 0; i < numArr.length; i++) {
        arrSum += Number(numArr[i]);
    }
    let mussBe = numArr.length * numArr[0];

    console.log(arrSum === mussBe);
    console.log(arrSum);

}

solve(22222222)