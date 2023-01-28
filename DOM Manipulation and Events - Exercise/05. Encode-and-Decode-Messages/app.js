function encodeAndDecodeMessages() {

    let encodeTextArea = document.querySelectorAll("textarea")[0];
    let decodeTextArea = document.querySelectorAll("textarea")[1];

    document.querySelectorAll("button")[0].addEventListener("click", () => encode(encodeTextArea.value));
    document.querySelectorAll("button")[1].addEventListener("click", () => decode(decodeTextArea.value));

    function encode(text) {
        let encodet = (text) => {
            let encoded = "";
            for (let i = 0; i < text.length; i++) {
                encoded += String.fromCharCode(text.charCodeAt(i) + 1);
            }
            return encoded;
        };
        decodeTextArea.textContent = encodet(text);
        encodeTextArea.value = "";

    }
    function decode(text) {

        let decoded = (text) => {
            let decoded = "";
            for (let i = 0; i < text.length; i++) {
                decoded += String.fromCharCode(text.charCodeAt(i) - 1);
            }
            return decoded;
        };

        document.querySelectorAll("textarea")[1].value = decoded(text);
        document.querySelectorAll("textarea")[0].value = "";
    }

}