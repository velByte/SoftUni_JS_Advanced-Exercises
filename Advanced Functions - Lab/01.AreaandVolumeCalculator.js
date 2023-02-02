//Call
// function solve(area, vol, str) {
//     let parsedInput = JSON.parse(str);
//     let result = [];

//     parsedInput.forEach(item => {
//         result.push({
//             area: area.call(item),
//             volume: vol.call(item)
//         })
//     })
//     return result;
// }


//Bind

function solve(area, vol, str) {
    let parsedInput = JSON.parse(str);
    let result = [];

    parsedInput.forEach(item => {

        let getArea = area.bind(item);
        let getVol = vol.bind(item);

        result.push(
            {
                area: getArea(),
                volume: getVol()


            }
        )

    })
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};


let input = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`


console.log(solve(area, vol, input)); 