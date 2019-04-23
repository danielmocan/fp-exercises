// 1. Sum the numeric values from the following array using filter, reduce
const values = [ 0, 2, "text", "Fortech", true, 4, 10, "fp", "vasile", 999 ];
const sum = values
            .filter( item => typeof item === "number" )
            .reduce( ( acc = 0, item ) => acc + item, 5 );

// 2. Sum the salaries of Fortech employees that are working for HR department, please use filter, reduce, map. Before we sum the salaries, lets give the HR department a raise, 20% each.

const employees = [
    {
      fullName: "Sandra",
      department: "Development",
      salary: 8000,
    },
    {
      fullName: "Rodica",
      department: "HR",
      salary: 5000,
    },
    {
      fullName: "Alexandra",
      department: "HR",
      salary: 3000,
    },
    {
      fullName: "Horea",
      department: "HR",
      salary: 3000,
    },
  ];
  const sum = employees
              .filter( employee => employee.department === "HR")
              .map( employee => {
                employee.salary = ( employee.salary * 0.20 ) + employee.salary;
                return employee;
              } )
              .reduce( ( total, employee ) => total + employee.salary , 0 );