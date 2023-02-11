function validate() {
    const form = document.getElementById('registerForm');
    const isCompanyCheckbox = document.getElementById('company');
    const isValidDiv = document.getElementById('valid');

    isCompanyCheckbox.addEventListener('change', function () {
        const companyInfo = document.getElementById('companyInfo');
        if (isCompanyCheckbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        const userNameIsValid = validateUsername(username.value);
        const emailIsValid = validateEmail(email.value);
        const passwordIsValid = validatePassword(password.value);
        const confirmPasswordIsValid = validateComfirmPassword(password.value, confirmPassword.value);

        username.style.border = userNameIsValid ? 'none' : '2px solid red';
        email.style.border = emailIsValid ? 'none' : '2px solid red';
        password.style.border = passwordIsValid ? 'none' : '2px solid red';
        confirmPassword.style.border = confirmPasswordIsValid ? 'none' : '2px solid red';

        let allValid = userNameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid;

        if (isCompanyCheckbox.checked) {
            const companyNumber = document.getElementById('companyNumber');
            const companyNumberIsValid = validateCompanyNumber(companyNumber.value);
            companyNumber.style.border = companyNumberIsValid ? 'none' : '2px solid red';
            if(!companyNumberIsValid){
                allValid = false;
            }
        }

        if(allValid){
            isValidDiv.style.display = 'block';
        } else {
            isValidDiv.style.display = 'none';
        }



    });

    function validateCompanyNumber(companyNumber) {
        return companyNumber >= 1000 && companyNumber <= 9999;
    };

    function validatePassword(password){
        let pattern = /([a-z0-9]{5,15})/
        return pattern.test(password);
    };

    function validateComfirmPassword(password, confirmPassword){
        let valid = false; 
        if(password.length != 0){
            valid = password === confirmPassword;
        }
        return valid;
    }

    function validateEmail(email) {
        let pattern = /([a-z0-9]+)@([a-z]+)\.([a-z]{2,3})/;
        return pattern.test(email);
    }

    function validateUsername(username){
        let pattern = /([a-z0-9]{3,20})/
        let valid = pattern.test(username) && username.length >= 3 && username.length <= 20;
        return valid;
    }
}
