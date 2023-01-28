function addItem() {
    let selectElement = document.getElementById("menu");
    let textItem = document.getElementById("newItemText");
    let valueItem = document.getElementById("newItemValue");

    let optionElement = document.createElement("option");
    optionElement.textContent = textItem.value;
    optionElement.value = valueItem.value;

    selectElement.appendChild(optionElement);

    //Clear the input fields
    textItem.value = "";
    valueItem.value = "";
}