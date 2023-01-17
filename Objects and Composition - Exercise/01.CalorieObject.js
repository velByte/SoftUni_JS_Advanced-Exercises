function solve(input) {

    let result = {}

    for (let i = 0; i < input.length;) {
        let key = input[i++];
        let value = Number(input[i++]);

        result[`${key}`] = value;
    }
    console.log(result);
}

let input = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

solve(input); 
