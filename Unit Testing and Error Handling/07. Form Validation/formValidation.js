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
        
        let userNameValid = () => {
            const userName = document.getElementById('username');
            const userNameRegex = /^[A-Za-z0-9]{3,20}$/;
            return userNameRegex.test(userName.value);
        };

        let emailValid = () => {
            const email = document.getElementById('email');
            const emailRegex = /^.*@.*\..*$/;
            return emailRegex.test(email.value);
        };

        let passwordValid = () => {
            const password = document.getElementById('password');
            const passwordRegex = /^\w{5,15}$/;
            return passwordRegex.test(password.value);
        };

        let confirmPasswordValid = () => {
            const confirmPassword = document.getElementById('confirm-password');
            const password = document.getElementById('password');
            let valid = false;
            if (password.value === confirmPassword.value && password.value !== '') {
                valid = true;
            }
            return valid;
        };

        let companyNumberValid = () => {
            const companyNumber = document.getElementById('companyNumber');
            return companyNumber.value >= 1000 && companyNumber.value <= 9999;
        };

        let companyInfoValid = () => {
            return isCompanyCheckbox.checked ? companyNumberValid() : true;
        };

        let allValid = () => {
            return userNameValid() && emailValid() && passwordValid() && confirmPasswordValid() && companyInfoValid();
        };

        if (allValid()) {
            isValidDiv.style.display = 'block';
        } else {
            isValidDiv.style.display = 'none';
        }   

        if (userNameValid()) {
            document.getElementById('username').style.borderColor = '';
        } else {
            document.getElementById('username').style.borderColor = 'red';
        }

        if (emailValid()) {
            document.getElementById('email').style.borderColor = '';
        } else {
            document.getElementById('email').style.borderColor = 'red';
        }   

        if (passwordValid() && confirmPasswordValid()) {
            document.getElementById('password').style.borderColor = '';
            document.getElementById('confirm-password').style.borderColor = '';
        } else {
            document.getElementById('password').style.borderColor = 'red';
            document.getElementById('confirm-password').style.borderColor = 'red';
            document.getElementById('confirm-password').style.borderColor = 'red';
            document.getElementById('password').style.borderColor = 'red';
        }   

        if (companyInfoValid()) {
            document.getElementById('companyNumber').style.borderColor = '';
        } else {    
            document.getElementById('companyNumber').style.borderColor = 'red';
            console.log("Should be red");
        }   

    });

    
}
