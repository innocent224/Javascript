// Mathematical addition
let mathResult = 15 + 27;
console.log("Math addition:", mathResult); // 42

// String concatenation
let firstName = "Sarah";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;
console.log("Name combination:", fullName); // "Sarah Johnson"

// Mixed types - JavaScript converts numbers to strings
let age = 25;
let introduction = "I am " + age + " years old";
console.log("Mixed types:", introduction); // "I am 25 years old"



console.log("=================End of Addition=========")



let totalStudents = 150;
let classSize = 30;
let numberOfClasses = totalStudents / classSize;

console.log("Students per class:", classSize);
console.log("Total students:", totalStudents);
console.log("Number of classes needed:", numberOfClasses);

// Calculating percentages
let correctAnswers = 18;
let totalQuestions = 20;
let percentage = (correctAnswers / totalQuestions) * 100;
console.log("Test score:", percentage + "%");

// Working with money
let itemPrice = 24.99;
let taxRate = 0.08;
let taxAmount = itemPrice * taxRate;
let totalCost = itemPrice + taxAmount;

console.log("Item price: " + "$"  + itemPrice);
console.log("Tax Amount: " + "$" + taxAmount);
console.log("Tax amount: $" + taxAmount.toFixed(2));
console.log("Total cost: $" + totalCost.toFixed(2));



// Checking if numbers are even or odd
let number1 = 17;
let number2 = 18;

console.log("17 divided by 2 remainder:", number1 % 2); // 1 (odd)
console.log("18 divided by 2 remainder:", number2 % 2); // 0 (even)

// Practical applications
let totalMinutes = 147;
let hours = Math.floor(totalMinutes / 60);
let remainingMinutes = totalMinutes % 60;

console.log(`${totalMinutes} minutes = ${hours} hours and ${remainingMinutes} minutes`);

// Cycling through options
let currentPage = 1;
let itemsPerPage = 5;
let totalItems = 23;
let lastPageItems = totalItems % itemsPerPage;

console.log("Items on the last page:", lastPageItems);






// Without parentheses
let result1 = 10 + 5 * 2;
console.log("10 + 5 * 2 =", result1); // 20 (not 30!)

// With parentheses to change order
let result2 = (10 + 5) * 2;
console.log("(10 + 5) * 2 =", result2); // 30

// Complex calculation example
let principal = 1000;
let rate = 0.05;
let time = 2;
let compoundInterest = principal * (1 + rate) ** time - principal;

console.log("Compound interest earned:", compoundInterest.toFixed(2));





let studentName = "Alex Rodriguez";
let currentGrade = 85;
let maxGrade = 100;
let myPercentage = (currentGrade / maxGrade) * 100;



// Old way - hard to read and error-prone
let oldReport = "Student " + studentName + " scored " + currentGrade + " out of " + maxGrade + " (" + myPercentage + "%)";

// Modern way - clear and powerful
let modernReport = `Student ${studentName} scored ${currentGrade} out of ${maxGrade} (${myPercentage}%)`;

console.log("Old way:", oldReport);
console.log("Modern way:", modernReport);

// Multi-line strings with template literals
let emailTemplate = `
Dear ${studentName},

Your current grade is ${currentGrade}/${maxGrade} (${percentage}%).

${percentage >= 70 ? "Congratulations! You're passing." : "Please see me for extra help."}

Best regards,
Professor Smith
`;

console.log(emailTemplate);






let userInput = "  JavaScript Programming  ";

// Cleaning up user input
let cleaned = userInput.trim(); // Removes spaces from beginning and end
console.log("Original:", "${userInput}");
console.log("Cleaned:", "${cleaned}");

// Changing case
let courseName = "javascript fundamentals";
let properCase = courseName.charAt(0).toUpperCase() + courseName.slice(1);
console.log("Proper case:", properCase);

let result = schoolName.slice(startindex, endIndex) 
console.log("sliced string:", result); // "uni"








// Finding and extracting information
let email = "student@university.edu";
let atPosition = email.indexOf("@");
let username = email.slice(0, atPosition);
let domain = email.slice(atPosition + 1);

console.log("Email parts:");
console.log("Username:", username);
console.log("Domain:", domain);

// Checking if strings contain specific text
let searchTerm = "script";
let hasJavaScript = cleaned.toLowerCase().includes(searchTerm);
console.log(`Contains "${searchTerm}":`, hasJavaScript);