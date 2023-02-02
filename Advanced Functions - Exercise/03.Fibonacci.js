function getFibonator(){
    let sequence = [];

    return function (){
        if (sequence.length === 0){
            sequence.push(0);
            sequence.push(1);
            return 1; 
        }
        let next = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 
        sequence.push(next);
        return next;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

