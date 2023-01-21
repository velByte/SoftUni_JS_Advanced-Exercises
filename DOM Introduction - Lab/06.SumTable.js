function sumTable() {
    let firstTabel = document.getElementsByTagName("table")[0];
    let tbodyArr = Array.from(firstTabel.getElementsByTagName("tr"));
    let tabelHeader = tbodyArr.shift();
    let totalPlaceHolder = tbodyArr.pop();
    let sum = 0;
    tbodyArr.forEach(item => {
        let price = Number(item.getElementsByTagName("td")[1].innerHTML);
        sum += price;
    })
    let sumPlace = document.getElementById("sum");
    sumPlace.innerHTML = sum;
}