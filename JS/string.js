let message = "Hello World";
let upperMessage = message.toUpperCase();
console.log(message);      // Still "Hello World"
console.log(upperMessage); // "HELLO WORLD"


// The length property returns the number of characters in a string, 
// including spaces and punctuation.
let greeting = "Hello, JavaScript!";
console.log(greeting.length); // 18

let firstPassword = "HOMIE12345"
let secondPassword = "BU12345"

// Practical example: Form validation
function isValidPassword(password) {
     console.log(password.length) 
}

isValidPassword(firstPassword);
isValidPassword(secondPassword);


// The charAt() method returns the character at a specified index in a string, 
// while the bracket notation ([]) can also be used to access characters in a string. 
// However, they behave slightly differently when accessing out-of-range indices.
let language1 = "JavaScript";
console.log(language1.charAt(0));  // "J"
console.log(language1.charAt(4));  // "S"
console.log(language1.charAt(20)); // "" (empty string for out of range)

let language = "JavaScript";
console.log(language[0]);  // "J"
console.log(language[4]);  // "S"
console.log(language[20]); // undefined (for out of range)



// The toLowerCase() and toUpperCase() methods 
// convert a string to lower case or upper case, 
// respectively.
let userInput = "JavaScript";

// Case conversion
console.log(userInput.toLowerCase()); // "javascript"
console.log(userInput.toUpperCase()); // "JAVASCRIPT"

// Practical example: Case-insensitive comparison
function compareIgnoreCase(str1, str2) {

    let firstValueLowercase = str1.toLowerCase();
    let secondValueLowercase = str2.toLowerCase();

    // Convert both strings to lower case for comparison
    let check = firstValueLowercase === secondValueLowercase;

    // Log the comparison result
    console.log(`Comparing "${str1}" and "${str2}":` , check);

    // Return the result
    return check;
}

let firstValue = "JavaScript";
let secondValue = "javascript";
let comparisonResult = compareIgnoreCase(firstValue, secondValue);

console.log(comparisonResult); // true



// The trim() method removes whitespace from both ends of a string.
// Email validation - ensuring consistent format
function normalizeEmail(email) {
    return email.toLowerCase().trim();
}

let myEmail = "HOMIE@gmail.com  "

let normalizedEmail = normalizeEmail(myEmail);


console.log("Original email:", "${myEmail}");
console.log("Normalized email:", "${normalizedEmail}");


// The indexOf() and lastIndexOf() methods return the index of the first or last occurrence
// of a specified substring within a string, respectively.
let sentence = "JavaScript is awesome, and JavaScript is powerful, JavaScript is everywhere! anddy";

let lengthOfSentence = sentence.length;
console.log("Length of sentence:", lengthOfSentence); // 49

let firstOccurrence = sentence.indexOf("and");
let lastOccurrence = sentence.lastIndexOf("and");

console.log(firstOccurrence);     // 0 (first occurrence)
console.log(lastOccurrence); // 25 (last occurrence)
console.log(sentence.indexOf("Python"));         // -1 (not found)

// Practical example: Finding file extensions
function getFileExtension(filename) {
    let dotIndex = filename.lastIndexOf(".");
    return dotIndex !== -1 ? filename.substring(dotIndex + 1) : "";
}

console.log(getFileExtension("document.pdf")); // "pdf"