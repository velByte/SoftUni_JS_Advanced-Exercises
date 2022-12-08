function solve(text) {
    let result = [];
    let pattern = /(\w)+/g;

    let match = pattern.exec(text);
    while (match != null) {
        result.push(match[0].toUpperCase());
        match = pattern.exec(text);
    }

    console.log(result.join(", "));
}