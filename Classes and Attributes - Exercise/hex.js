class Hex{
    constructor(value){
        this.value = value; 
    }

    valueOf(){
        return this.value; 
    }

    toString(){
        return "0x" + this.value.toString(16).toUpperCase();
    }

    plus(number){
        if(number instanceof Hex){
            number = number.valueOf();
        } 
        return new Hex(this.value + number);
    }
    minus(number){
        if(number instanceof Hex){
            number = number.valueOf();
        } 
        return new Hex(this.value - number);
    }
     parse(string) {
        if (string.startsWith('0x')) {
          string = string.substring(2);
        }
        return parseInt(string, 16);
      }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
