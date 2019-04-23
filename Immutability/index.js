//1. Create an immutable object using Object.freeze, and try to modify one of the properties and see what happens.

const person = Object.freeze( { 
    name: "Vasile",
    age: 89,
    position: "Junior Cobol Developer"
  } );
  person.name = "Ion"; //
  console.log( person.name ) // "Vasile";