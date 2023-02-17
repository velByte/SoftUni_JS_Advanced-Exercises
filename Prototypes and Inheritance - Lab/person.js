class Person{
    constructor(firstName, lastName){
        this._firstName = firstName; 
        this._lastName = lastName; 
        this._fullName = firstName + " " + lastName;
    }

    set firstName(value){
        this._firstName = value; 
        this._fullName = `${value} ${this._lastName}`
    }

    set lastName(value){
        this._lastName = value; 
        this._fullName = `${this._firstName} ${value}`
    }

    set fullName(value){
        let temp = value.split(" ");
        if(temp.length == 2){
            let [firstName, lastName] = temp; 
            this.firstName = firstName; 
            this.lastName = lastName; 
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName; 
    }

    get fullName(){
        return this._fullName; 
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";

console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla