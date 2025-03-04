// Data types and Variables

// variable
console.log("Chinedu Iwuchuwkwu Paul");

// number
console.log(26);

// Boolean
let isStudent = true;
console.log(isStudent);

// undefined
let unknown;
console.log(unknown);

// null
let response = null;
console.log(response);

// object
let object = {
  name: "John Doe", // String property
  age: 25, // Number property
  isStudent: true, // Boolean property
};

// Operations

// Variables num1 and num2
const num1 = 4;
const num2 = 2;

// Addition
console.log(num1 + num2);

// Multiplication
console.log(num1 * num2);

// Subtraction
console.log(num1 - num2);

// Division
console.log(num1 / num2);

// Increment value

// Addition

let digit = 5;
console.log(digit++);
console.log(digit);

// Subtraction
let num = 5;
console.log(num--);
console.log(num);

// comparism operator

const red = 15;
const blue = 10;

// loose equality
console.log(blue == "10");

// Strict equality
console.log(red === "15");

// loose inequality
console.log(blue != "10");

// Strict inequality
console.log(red !== "15");

// greater than
console.log(red > 15);

// less than
console.log(red < 15);

// greater than or equals to
console.log(red >= 15);

// less than or equals t0
console.log(red <= 14);

// template literal

const id = "Chinedu Iwuchukwu";
const state = "lagos";
const salary = "$3,000 USD";
const profession = "Frontend developer";

console.log(
  `My name is ${id}, I live in ${state}. I have 1 year experience in ${profession}, my salary expectation is ${salary} every month after tax`
);

const person = {
  fullName: "Nedu blaq",
  emailAddress: "blaq@example.com",
  age: 29,
  gender: "male",
  role: "admin",
  occupation: "Frontend Engineer",
};

person.age = person.age + 4;

console.log("age", person.age);

// Array
let fruits = ["apple", "banana", "cherry", "Pineapple", "Strawberry"];

// first element
console.log(fruits[0]);

// last element
console.log(fruits[4]);

// adding new item
fruits.push("lemon");
console.log(fruits);

// removing last item
let removeFruits = fruits.pop();
console.log(fruits);

let arrayLength = fruits.length;
console.log(arrayLength);
