function solve(arr, startIndex, endIndex){
    if (!Array.isArray(arr)) return NaN;
    if (startIndex < 0) startIndex = 0;
    if ((endIndex > arr.length - 1) || (endIndex < 0)) endIndex = arr.length - 1 ; 
    
    let result = 0;
    for (let i = startIndex; i <= endIndex; i++ ){
        if (isNaN(arr[i])) return NaN
        result += arr[i]
    } 

    return Math.round(result * 10) / 10;
}


// console.log(solve([10, 'twenty', 30, 40], 0, 2));
// console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(solve([], 1, 2));
// console.log(solve('text', 0, 2));

module.export = solve