//06. From JSON to HTML Table

function solve(input) {
    let arr = JSON.parse(input);
    let result = '<table>\n';
    result += '  <tr>';
    for (let key in arr[0]) {
        result += `<th>${key}</th>`;
    }
    result += '</tr>\n';
    for (let obj of arr) {
        result += '  <tr>';
        for (let key in obj) {
            result += `<td>${escapeHtml(obj[key])}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</table>';
    console.log(result);

    function escapeHtml(str) {
        str = str.toString();
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return str.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

let input = `[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`

solve(input); 