class Company {
  constructor() {
    this.departments = new Map();
  }
  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    }
    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    if (this.departments.has(department)) {
      let currentDep = this.departments.get(department);
      currentDep.push({
        name,
        salary,
        position,
        department,
      });
    } else {
      this.departments.set(department, [
        {
          name,
          salary,
          position,
          department,
        },
      ]);
    }

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let bestDepartment = "";
    let highestAvg = 0;

    for (const [department, employees] of this.departments.entries()) {
      const totalSalary = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0
      );
      const avgSalary = totalSalary / employees.length;
      if (avgSalary > highestAvg) {
        bestDepartment = department;
        highestAvg = avgSalary;
      }
    }

    const sortedEmployees = [...this.departments.get(bestDepartment)].sort((a, b) => {
      if (b.salary === a.salary) {
        return a.name.localeCompare(b.name);
      }
      return b.salary - a.salary;
    });

    let result = `Best Department is: ${bestDepartment}\nAverage salary: ${highestAvg.toFixed(
      2
    )}\n`;
    for (const employee of sortedEmployees) {
      result += `${employee.name} ${employee.salary} ${employee.position}\n`;
    }

    return result.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
