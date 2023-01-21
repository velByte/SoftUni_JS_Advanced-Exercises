function extractText() {
    let items = document.querySelectorAll('li');
    let result = []

    for (let i = 0; i < items.length; i++) {
        result.push(items[i].innerText)
    }
    let text = result.join('\n')
    let input = document.querySelector('textarea')
    input.value = text
}