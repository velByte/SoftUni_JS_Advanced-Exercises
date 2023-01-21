function solve() {
    let button = document.querySelector('button');
    button.addEventListener('click', convert);

    let selectElement = document.getElementById('selectMenuTo');

    let bineryOption = document.createElement("option");
    bineryOption.text = 'Binary';
    bineryOption.value = 'binary';

    let hexadecimalOption = document.createElement("option");
    hexadecimalOption.text = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectElement.appendChild(bineryOption);
    selectElement.appendChild(hexadecimalOption);

    function convert() {
        //get the selected option
        let selectedOption = selectElement.options[selectElement.selectedIndex].value;
        //get the number
        let number = Number(document.getElementById('input').value);
        if (selectedOption === 'binary') {
            document.getElementById('result').value = binary(number);
        } else if (selectedOption === 'hexadecimal') {
            document.getElementById('result').value = hexadecimal(number);
        }

        //remove the event listener to prevent multiple clicks on the button 
        button.removeEventListener('click', convert);
    }


    // decimal to binary
    let binary = (num) => {
        console.log(num);
        let decimal = num;
        let binary = '';
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = decimal >> 1;
        }

        return binary;
    };
    // decimal to hexadecimal
    let hexadecimal = (num) => {
        return num.toString(16).toUpperCase();
    }
}

