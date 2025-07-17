// Variable Declarations

// var
// let
// const

// var can be redeclared. 
// It can also be problematic since a single varia ble
// can point to different values in different scopes.
var myGame = "Chess"; // using var
var myGame = "Football"; // re-declaring with var

// let can be reassigned but not redeclared in the same scope.
// It is block-scoped, meaning it is limited to the block in which it is defined
let myAge = 25; // using let
myAge = 30; // re-assigning with let


// const cannot be reassigned or redeclared.
// It is also block-scoped, similar to let.
const myCountry = "USA"; // using const
// myCountry = "Canada"; // Error: Cannot reassign a constant variable

// strings and how they are written
let myName = "Alice"; // string with double quotes
let surname = 'Smith'; // string with single quotes
const fullName = `Mynames are ${myname} and ${Surname}`; // Dynamic string using template literals

// Console log statements
console.log(fullName); // Output: My names are Alice and Smith

// camel casing
myNewVaiable = "This is a variable with camel casing";

// pascal casing 
MyNewVariable = "This is a variable with pascal casing";

// script.js - My first external JavaScript file

// Displaying different types of information
console.log("=== Welcome to JavaScript ===");
console.log("Today's date information:");
console.log("Year: 2025");
console.log("Month: July");
console.log("Day: 16");

// Performing calculations
console.log("=== Math Examples ===");
console.log("Adding numbers: 15 + 27 =", 15 + 27);
console.log("Multiplying: 8 * 7 =", 8 * 7);
console.log("Dividing: 100 / 4 =", 100 / 4);

// Working with text
console.log("=== Text Examples ===");
console.log("Combining words: " + "Java" + "Script");
console.log("My name is: " + "Student"); // They'll change this to their name
console.log("===========End===========");

console.log("=== Variable Types ===");
let wholeNumber = 42;
let decimalNumber = 3.14159;
let negativeNumber = -17;

// JavaScript can perform math operations
let sum = wholeNumber + decimalNumber;
let product = wholeNumber * 2;
let percentage = (wholeNumber / 100) * 85;

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Percentage:", percentage);

myNumbers = [1, 2, 3, 4, 5];

const lengthOfNumbers = myNumbers.length

console.log("Length of myNumbers array:", lengthOfNumbers);

let divideByZero = 10 / 0; // Results in Infinity
let impossibleMath = "hello" * 5; // Results in NaN

console.log("Division by zero:", divideByZero);
console.log("Text times number:", impossibleMath);

let firstName = "Sarah";
let lastName = "Johnson";
let age = 25;

// Old way of combining strings
let introduction1 = "Hi, I'm " + firstName + " " + lastName + " and I'm " + age + " years old.";

// New way with template literals
let introduction2 = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;

console.log(introduction1);
console.log(introduction2);


let message = "JavaScript is Amazing";

console.log("Original:", message);
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());
console.log("Length:", message.length);
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);

console.log("=========Booleans=========")
let isLoggedIn = true;
let hasCompletedHomework = false;
let isWeekend = true;

console.log("User logged in:", isLoggedIn);
console.log("Homework done:", hasCompletedHomework);
console.log("Is it weekend:", isWeekend);

let userAge = 18;
let minimumAge = 16;

let canDrive = userAge >= minimumAge;
console.log("Can drive:" , canDrive); // true

let temperature = 75;
let isCold = temperature < 60;
console.log("Is it cold:", isCold); //

console.log("=========Null and undefined=========");
let declaredButEmpty; // This is Undefined
let intentionallyEmpty = null; // This is null

console.log("Undefined variable:", declaredButEmpty);
console.log("Null variable:", intentionallyEmpty);


// Dynamic Typing - Variables that can change their type
let flexibleVariable = "Hello"; // Starts as a string
console.log("As string:", flexibleVariable, typeof flexibleVariable);

flexibleVariable = 42; // Now it's a number
console.log("As number:", flexibleVariable, typeof flexibleVariable);

flexibleVariable = true; // Now it's a boolean
console.log("As boolean:", flexibleVariable, typeof flexibleVariable);

// String + Number = String (concatenation)
let result1 = "The answer is" + 42;
console.log(result1); // "The answer is 42"

//Number + String = String
let result2 = 5 + "3";
console.log(result2); // "53" not (8!)

// Number - String = Number (JavaScript converts string to number)
let result3 = 10 - "3";
console.log(result3); // 7

// Boolean in math context
let result4 = true + 1;
console.log(result4); // 2 (true becomes 1)

console.log("===========Example==========");

//personal information using different data type
const myFirstName ="Alex";
const myLastName = "Rodriguez";
let currentAge ="22";
let isStudent = true;
let graduationYear = null; // Will be set later

// Caculated information
let birthYear = 2025 - currentAge;
let fullname = `${myFirstName} ${myLastName}`;
let canVote = currentAge >= 18;

//Display information
console.log("=== Personal Information System ===");
console.log(`Full Name: ${fullName}`);
console.log(`Age: ${currentAge} years old`);
console.log(`Born in: ${birthYear}`);
console.log(`Student Status: ${isStudent}`);
console.log(`Can Vote: ${canVote}`);
console.log(`Gradution Year: ${graduationYear}`);

// Update information
isStudent = false;
graduationYear = 2024;
currentAge = 23; // Birthday happened

console.log("\n=== Updated Information ===");
console.log(`Age: ${currentAge} years old`);
console.log(`Student Status: ${isStudent}`);
console.log(`Gradution Year: ${graduationYear}`);