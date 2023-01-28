function validate() {
    //Regex <name>@<domain>.<extension>
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange(e) {
        if (regex.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    }
}