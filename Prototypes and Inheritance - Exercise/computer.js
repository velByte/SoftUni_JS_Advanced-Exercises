function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
          this.manufacturer = manufacturer;
          this.responseTime = Number(responseTime);
        }
      }
      
      class Monitor {
        constructor(manufacturer, width, height) {
          this.manufacturer = manufacturer;
          this.width = Number(width);
          this.height = Number(height);
        }
      }
      
      class Battery {
        constructor(manufacturer, expectedLife) {
          this.manufacturer = manufacturer;
          this.expectedLife = Number(expectedLife);
        }
      }
      
      class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
          if (this.constructor === Computer) {
            throw new Error("Abstract class cannot be instantiated.");
          }
          this.manufacturer = manufacturer;
          this.processorSpeed = Number(processorSpeed);
          this.ram = Number(ram);
          this.hardDiskSpace = Number(hardDiskSpace);
        }
      }
      
      class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
          super(manufacturer, processorSpeed, ram, hardDiskSpace);
          this.weight = Number(weight);
          this.color = color;
          this._battery = null;
          this.battery = battery;
        }
      
        set battery(battery) {
          if (!(battery instanceof Battery)) {
            throw new TypeError("Battery should be an instance of the Battery class.");
          }
          this._battery = battery;
        }
      
        get battery() {
          return this._battery;
        }
      }
      
      class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
          super(manufacturer, processorSpeed, ram, hardDiskSpace);
          this._keyboard = null;
          this._monitor = null;
          this.keyboard = keyboard;
          this.monitor = monitor;
        }
      
        set keyboard(keyboard) {
          if (!(keyboard instanceof Keyboard)) {
            throw new TypeError("Keyboard should be an instance of the Keyboard class.");
          }
          this._keyboard = keyboard;
        }
      
        get keyboard() {
          return this._keyboard;
        }
      
        set monitor(monitor) {
          if (!(monitor instanceof Monitor)) {
            throw new TypeError("Monitor should be an instance of the Monitor class.");
          }
          this._monitor = monitor;
        }
      
        get monitor() {
          return this._monitor;
        }
      }
    return {
      Keyboard,
      Monitor,
      Battery,
      Computer,
      Laptop,
      Desktop
    };
  }

  let classes = createComputerHierarchy()
  let Computer = classes.Computer; 

let Laptop = classes.Laptop; 

let Desktop = classes.Desktop; 

let Monitor = classes.Monitor; 

let Battery = classes.Battery; 

let Keyboard = classes.Keyboard; 
let battery = new Battery('Energy', 3); 

console.log(battery); 

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery); 

console.log(laptop); 