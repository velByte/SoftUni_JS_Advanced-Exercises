function editElement(ref, match, replacer) {
    let element = ref;
    let text = element.textContent;

    let matcher = new RegExp(match, 'g');
    let replaced = text.replace(matcher, replacer);

    element.textContent = replaced;

}