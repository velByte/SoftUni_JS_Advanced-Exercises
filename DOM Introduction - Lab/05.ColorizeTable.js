function colorize() {
    let tabelContent = document.querySelectorAll('table tr');
    for (let i = 1; i < tabelContent.length; i += 2) {
        tabelContent[i].style.backgroundColor = 'teal';
    }
}