function focused() {
    let inputs = Array.from(document.querySelectorAll('input'));

    inputs.forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

    function onFocus(e) {
        e.target.parentNode.className = 'focused';
    }

    function onBlur(e) {
        e.target.parentNode.className = '';
    }
}