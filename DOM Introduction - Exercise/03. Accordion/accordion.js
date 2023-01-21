function toggle() {
    let spanElement = document.getElementsByClassName("button")[0];
    let buttonContent = spanElement.innerText.toUpperCase();
    let content = document.getElementById("extra")
    if (buttonContent === "MORE") {
        spanElement.innerText = "Less";
        content.style.display = "block"
    } else if (buttonContent === "LESS") {
        spanElement.innerText = "More";
        content.style.display = "none"
    }
}