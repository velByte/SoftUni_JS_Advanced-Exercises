function addItem() {
    // id = newItemText
    let input = document.getElementById('newItemText').value;
    //Reset the input field
    document.getElementById('newItemText').value = "";
    let li = document.createElement('li');
    li.textContent = input;

    //create delete button and append it to li

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', deleteItem);
    li.appendChild(deleteBtn);


    let ul = document.getElementById('items');
    ul.appendChild(li);

    function deleteItem(e) {
        e.target.parentNode.remove();
    }
}