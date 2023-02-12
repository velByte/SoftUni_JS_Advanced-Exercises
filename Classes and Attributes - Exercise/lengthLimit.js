class Stringer{
    constructor(string, length){
        this.innerString = string; 
        this.innerLength = length; 
    }

    increase(number){
        this.innerLength+=number; 
    }

    decrease(number){
        this.innerLength = this.innerLength - number < 0 ? 0 : this.innerLength - number; 
    }

    toString(){
        
        if(this.innerLength === 0){
            return "..."
        }
        else if(this.innerString.length > this.innerLength){
            let endIndex = this.innerString.length-this.innerLength; 
            return this.innerString.slice(0, endIndex)+ "...";
        } 
        else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4); 
console.log(test.toString()); // Test