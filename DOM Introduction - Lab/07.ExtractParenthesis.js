function extract(content) {
    let rawText = document.getElementById("content").innerHTML;
    let regex = new RegExp(/\(([\w ]+)\)/gm)
    let match = regex.exec(rawText);
    let result = [];
    while (match != null) {
        let word = match[1];
        result.push(word)
        match = regex.exec(rawText);
    }
    return result.join("; ");
}