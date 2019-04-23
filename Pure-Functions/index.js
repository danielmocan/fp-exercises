// 1. Rewrite the increateSalary function to be a pure function

const salaryIncreasePercent = 0.15; // 15%
const employees = [
    { firstName: "Marius", lastName: "Vanca", salary: 1000 },
    { firstName: "Rodica", lastName: "Maga", salary: 1400 },
    { firstName: "Calin", lastName: "Vaduva", salary: 2500 }
];

const increaseSalary = ( employee ) => {
    const newSalary = ( employee.salary * salaryIncreasePercent ) + employee.salary;
    return Object.assign( { }, employee, { salary: newSalary } );
}

const updatedEmployees = employees.map( increaseSalary );
console.log( "updatedEmployees", updatedEmployees );

// Solution
const increaseSalary = ( salaryIncreasePercent ) => ( employee ) => {
  const newSalary = ( employee.salary * salaryIncreasePercent ) + employee.salary;
  return Object.assign( { }, employee, { salary: newSalary } );
};

// 2. Rewrite generatedId and calculateTax as a pure function.

const timestamp = new Date().getTime();
const generateId = ( timestamp ) => {
  return `ID_${ timestamp }`;
}

const calculateTax = ( productPrice ) => {
  const vat = 0.19;
  return ( productPrice * vat ) + productPrice;
}