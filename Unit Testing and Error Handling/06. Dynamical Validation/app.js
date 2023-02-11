function validate() {
    const input = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    //Add an change event listener to the input element
    input.addEventListener('change', function () {
        if(pattern.test(input.value)){
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
    
}