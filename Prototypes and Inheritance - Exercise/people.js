function people() {
    class Employee{
        constructor(name, age){
            this.name = name; 
            this.age = age; 
            this.salary = 0; 
            this._currentTask = 0; 
            this.tasks = [];
            this.bonus = 0;
        }
        work(){
            let current = this._currentTask;
            this._currentTask = (this._currentTask + 1) % this.tasks.length;  
            console.log(`${this.name} ${this.tasks[current]}`);
        }
        collectSalary(){
            let total = this.salary; 
            if(this.dividend) {total+=this.dividend}
            if(this.bonus) {total+=this.bonus}

            console.log(`${this.name} received ${total} this month.`);
        }
    }
    
    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = ['is working on a simple task.']
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = ['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.']
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks = ['scheduled a meeting.', 'is preparing a quarterly report.']
        }
    }


    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

