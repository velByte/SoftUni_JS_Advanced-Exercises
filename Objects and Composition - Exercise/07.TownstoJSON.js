function solve(input) {
    input.shift();

    let result = [];
    input.forEach(item => {
        item = " " + item + " ";
        item = item.split(" | ")
        item.shift();
        item.pop();
        let [name, lat, lon] = item;
        lat = Number((Number(lat)).toFixed(2));
        lon = Number((Number(lon)).toFixed(2));
        result.push({
            Town: name,
            Latitude: lat,
            Longitude: lon
        })
    })

    console.log(JSON.stringify(result));

}

let input = ['| Town | Latitude | Longitude |',
    '| Sofia Grad | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']

solve(input)