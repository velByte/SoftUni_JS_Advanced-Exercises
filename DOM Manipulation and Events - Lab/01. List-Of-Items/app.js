function addItem() {
    // id = newItemText
    let input = document.getElementById('newItemText').value;
    //Reset the input field
    document.getElementById('newItemText').value = "";
    let li = document.createElement('li');
    li.textContent = input;

    let ul = document.getElementById('items');
    ul.appendChild(li);
}