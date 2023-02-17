function classHierarchy() {
    class Figure {
        constructor(unit = 'cm') {
            this.unit = unit;
        }

        get area() {
            return undefined;
        }

        changeUnits(value) {
            this.unit = value;
        }

        toString() {
            return `Figures units: ${this.unit}`;
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.r = r;
        }

        get area() {
            let value = Math.PI * this.r * this.r;

            // Area is in cm

            if(this.unit === 'mm'){
                value*=100;
            } else if(this.unit === 'm'){
                value/=10000;
            } else {
                value*=1;
            }

            return value;
        }

        toString() {
            let radiusConverted = undefined;

            if(this.unit === 'mm'){
                radiusConverted = this.r * 10
            } else if(this.unit === 'm'){
                radiusConverted = this.r / 100;
            } else {
                radiusConverted = this.r;
            }

            return `${super.toString()} Area: ${this.area} - radius: ${radiusConverted}`;
          }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super(unit);
            this.width = width;
            this.height = height;
        }

        get area() {
            let value = this.width * this.height;
            
            if(this.unit === 'mm'){
                value*=100;
            } else if(this.unit === 'm'){
                value/=10000;
            } else {
                value*=1;
            }
            
            return value;
        }

        toString() {
            let convertedWidth = this.width;
            let convertedHeight = this.height;

            if(this.unit === 'mm'){
                convertedWidth *= 10
                convertedHeight *= 10
            } else if(this.unit === 'm'){
                convertedWidth /= 100
                convertedHeight /= 100
            } else {
                convertedWidth *= 1
                convertedHeight *= 1
            }

            return `${super.toString()} Area: ${this.area} - width: ${convertedWidth}, height: ${convertedHeight}`;
          }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}


let { Figure, Circle, Rectangle } = classHierarchy();

let c = new Circle(5);
console.log(c.area);  // 78.53981633974483
console.log(c.toString());  // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area);  // 1200 
console.log(r.toString());  // Figures units: mm Area: 1200 - width: 3, height: 4

r.changeUnits('cm');
console.log(r.area);  // 12
console.log(r.toString());  // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area);  // 7853.981633974483
console.log(c.toString())  // Figures units: mm Area: 7853.981633974483 - radius: 50
