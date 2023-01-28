function deleteByEmail() {

    let input = document.querySelector('input[name="email"]').value;

    let rows = document.querySelectorAll('tbody tr');

    //Loop through the rows
    for (let row of rows) {
        console.log(row.children[1].textContent);
        if (row.children[1].textContent === input) {
            row.remove();
            document.getElementById("result").textContent = "Deleted.";
            return;
        }
        document.getElementById("result").textContent = "Not found.";
    }
}