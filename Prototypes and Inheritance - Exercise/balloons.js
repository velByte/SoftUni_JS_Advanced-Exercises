function balloons() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight; 
        }

    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight); 
            this.ribbonColor= ribbonColor,
            this.ribbonLength= ribbonLength,
            this._ribbon= {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }

        get ribbon(){
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return {
        Balloon, 
        PartyBalloon, 
        BirthdayBalloon
    }
}

let classes =balloons();

let test = new classes.Balloon("Tumno-bqlo", 20.5);
console.log(test.gasWeight);