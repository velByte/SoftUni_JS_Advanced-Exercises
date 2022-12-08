function solve(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let point1 = {
        "x": x1,
        "y": y1
    }

    let point2 = {
        "x": x2,
        "y": y2
    }

    console.log(`{${x1}, ${y1}} to {0, 0} ${isValid(point1, { "x": 0, "y": 0 }) ? "is valid" : "is invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${isValid(point2, { "x": 0, "y": 0 }) ? "is valid" : "is invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${isValid(point1, point2) ? "is valid" : "is invalid"}`);



    function isValid(point1, point2) {
        let distance = Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
        return Number.isInteger(distance);
    }


}