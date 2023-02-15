class Textbox {
    constructor(selector, regex){
        this.selector = selector; 
        this.regex = regex; 
        this._value; 
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = new RegExp(regex); 
    }

    get value(){
        return this._value; 
    }
    set value(v){
        this._value = v; 
        for (const element of this._elements) {
            element.value = v;
        }
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        let result = false; 
        for (const element of this._elements) {
            if(!this._invalidSymbols.test(element.value)){
                result = true; 
            }
        }
        return result;
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

for (const input of inputs) {
    input.addEventListener('click',function(){
        console.log(textbox.value);
    });
}

