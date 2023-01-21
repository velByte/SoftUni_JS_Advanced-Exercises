function generateReport() {

    let tableHeader = {};

    /* This is getting the table header elements and checking if the checkbox is checked or not. */
    let table = document.getElementsByTagName("table")[0];
    let tableHeaderElements = table.getElementsByTagName("tr")[0].getElementsByTagName("th");
    for (const item of tableHeaderElements) {
        let columnName = item.textContent.toLocaleLowerCase().trim().replace(" ", "_");
        let isChecked = item.getElementsByTagName("input")[0].checked;
        tableHeader[columnName] = isChecked;
        // tableHeader.push({ columnName, isChecked });
    }

    let result = [];

    let tableBodyElements = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (const item of tableBodyElements) {
        let values = Array.from(item.getElementsByTagName("td")).map((i => i.textContent));
        let tempObj = {};
        for (let i = 0; i < values.ä.'length; i++) {
            if (tableHeader[Object.keys(tableHeader)[i]]) {
                tempObj[Object.keys(tableHeader)[i]] = values[i];
            }
        }
        if (Object.keys(tempObj).length > 0) {
            result.push(tempObj);
        }
    }
    document.getElementById("output").value = JSON.stringify(result);
}