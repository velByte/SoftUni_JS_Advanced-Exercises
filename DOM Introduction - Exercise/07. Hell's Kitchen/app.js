function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      class Restorant {
         constructor(name) {
            this.name = name;
            this.averageSalary = 0;
            this.employees = [];
            this.bestSalary = 0;
         }
         addEmployee(employee, salary) {
            this.employees.push({ employee, salary });
            this.averageSalary = this.employees.reduce((acc, curr) => acc + curr.salary, 0) / this.employees.length;
            this.bestSalary = this.employees.reduce((acc, curr) => Math.max(acc, curr.salary), 0);
         }
      }

      let restorants = new Map();

      for (let line of input) {

         let [restorantName, employees] = line.split(' - ');
         employees = employees.split(', ');

         if (!restorants.has(restorantName)) {
            restorants.set(restorantName, new Restorant(restorantName));
         }

         for (let employee of employees) {
            let [name, salary] = employee.split(' ');
            salary = Number(salary);
            restorants.get(restorantName).addEmployee(name, salary);
         }
      }

      let bestRestorant = [...restorants.values()].sort((a, b) => b.averageSalary - a.averageSalary)[0];
      let textBestRestaurant = (`Name: ${bestRestorant.name} Average Salary: ${bestRestorant.averageSalary.toFixed(2)} Best Salary: ${bestRestorant.bestSalary.toFixed(2)}`);
      document.querySelector('#bestRestaurant p').textContent = textBestRestaurant;
      let textWorkers = bestRestorant.employees.sort((a, b) => b.salary - a.salary).map(e => (`Name: ${e.employee} With Salary: ${e.salary}`)).join(' ');
      document.querySelector('#workers p').textContent = textWorkers;
   }

}
