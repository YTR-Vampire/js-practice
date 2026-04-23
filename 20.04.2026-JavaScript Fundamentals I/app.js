// Exercise 1: Terminal & Project Setup - 
console.log("Hello Pelsung!");

// Exercise 2: Variables & Functions
const name = "Yugel";
let age = 37;

console.log("Name:", name);
console.log("Age:", age);
age = 38; 
console.log("Updated:", age);

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Yugel"));

const isAdult = (age) => age >= 18;
console.log(isAdult(37));