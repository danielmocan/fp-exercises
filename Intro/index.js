// We have the following employees list, because the all employees did a good job in the past year, the management decided to raise the salary of each employee with 15%, please implement using: imperative and declarative styles.
const salaryIncreasePercent = 0.15; // 15%
const employees = [
    { firstName: "Marius", lastName: "Vanca", salary: 1000 },
    { firstName: "Rodica", lastName: "Maga", salary: 1400 },
    { firstName: "Calin", lastName: "Vaduva", salary: 2500 }
];

// Declarative
const increaseSalary = ( employee ) => {
    const newSalary = ( employee.salary * salaryIncreasePercent ) + employee.salary;
    return Object.assign( { }, employee, { salary: newSalary } );
}

const updatedEmployees = employees.map( increaseSalary );
console.log( "updatedEmployees", updatedEmployees );

// Imperative
for( let i = 0; i < employees.length; i++ ) {
    const increaseAmount = employees[ i ].salary * salaryIncreasePercent;
    employees[ i ].salary = employees[ i ].salary + increaseAmount;
};
