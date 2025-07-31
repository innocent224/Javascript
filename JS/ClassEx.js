let userInput = "  JavaScript Programming  ";

// Cleaning up user input
let cleaned = userInput.trim(); // Removes spaces from beginning and end
console.log("Original:", "${userInput}");
console.log("Cleaned:", "${cleaned}");

// Changing case
let courseName = "javascript fundamentals";
let properCase = courseName.charAt(0).toUpperCase() + courseName.slice(1);
console.log("Proper case:", properCase);

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








let announcement = "The exam is scheduled for Monday at 10:00 AM";

// Simple replacement
let rescheduled = announcement.replace("Monday", "Wednesday");
console.log("Rescheduled:", rescheduled);

// Multiple replacements
let formatted = announcement
    .replace("exam", "EXAM")
    .replace("Monday", "WEDNESDAY")
    .replace("10:00 AM", "2:00 PM");
    
console.log("Formatted:", formatted);

// Working with file names
let fileName = "student_report_2025.pdf";
let parts = fileName.split("_");
console.log("File name parts:", parts);

let newFileName = parts.join("-"); // Join with different separator
console.log("New file name:", newFileName);




let studentAge = 20;
let minimumAge = 18;
let maximumAge = 65;
let currentYear = 2025;
let graduationYear = 2026;

// Basic comparisons
console.log("Is student adult?", studentAge >= minimumAge);
console.log("Is student senior?", studentAge >= 65);
console.log("Will graduate this year?", graduationYear === currentYear);
console.log("Will graduate next year?", graduationYear === currentYear + 1);

// Working with grades
let testScore = 87;
let passingGrade = 70;
let honorRollGrade = 90;

console.log("Passed test?", testScore >= passingGrade);
console.log("Honor roll?", testScore >= honorRollGrade);
console.log("Needs improvement?", testScore < passingGrade);

// String comparisons
let password = "SecurePass123";
let minPasswordLength = 8;
let maxPasswordLength = 20;

console.log("Password long enough?", password.length >= minPasswordLength);
console.log("Password not too long?", password.length <= maxPasswordLength);
console.log("Password valid length?", 
    password.length >= minPasswordLength &&
     password.length <= maxPasswordLength);




let numberAsString = "5";
let actualNumber = 5;

// Loose equality (==) - converts types before comparing
console.log("Loose equality (==):");
console.log('"5" == 5:', numberAsString == actualNumber); // true

// Strict equality (===) - compares type AND value
console.log("Strict equality (===):");
console.log('"5" === 5:', numberAsString === actualNumber); // false

// Why strict equality is usually better
let myUserInput = "0";
let defaultValue = 0;

console.log("User input == default:", myUserInput == defaultValue); // true
console.log("User input === default:", myUserInput === defaultValue); // false

// The strict comparison tells us the user actually entered something
if (myUserInput !== "") {
    console.log("User provided input:", myUserInput);
} else {
    console.log("Using default value");
}


let age = 22;
let hasLicense = true;
let hasInsurance = true;
let hasVehicle = false;

// AND operator (&&) - ALL conditions must be true
let canDriveReally = age >= 16 && hasLicense && hasInsurance;
console.log("Can drive legally:", canDriveReally);

// OR operator (||) - AT LEAST ONE condition must be true
let canGetToWork = hasVehicle || hasLicense; // Could drive or get rides
console.log("Can get to work:", canGetToWork);

// NOT operator (!) - reverses true/false
let needsLicense = !hasLicense;
console.log("Needs to get license:", needsLicense);

// Complex real-world example
let currentHour = 14; // 2 PM in 24-hour format
let isWeekend = false;
let isHoliday = false;
let hasAssignment = true;

let shouldStudy = (currentHour >= 9 && currentHour <= 17) && // During study hours
                  !isWeekend && // Not weekend
                  !isHoliday && // Not holiday
                  hasAssignment; // Has work to do

console.log("Should be studying:", shouldStudy);

// Grade calculation with multiple criteria
let attendance = 95; // percentage
let assignments = 88; // average score
let participation = 92; // score
let finalExam = 85; // score

let passesAttendance = attendance >= 80;
let passesAssignments = assignments >= 70;
let passesParticipation = participation >= 75;
let passesFinalExam = finalExam >= 60;

let passesCourse = passesAttendance && passesAssignments && 
                   passesParticipation && passesFinalExam;

console.log("Course Requirements:");
console.log("Attendance OK:", passesAttendance);
console.log("Assignments OK:", passesAssignments);
console.log("Participation OK:", passesParticipation);
console.log("Final Exam OK:", passesFinalExam);
console.log("PASSES COURSE:", passesCourse);





let coolUsername = "";
let defaultName = "Guest";

// OR operator short-circuits if first value is truthy
let displayName = coolUsername || defaultName;
console.log("Display name:", displayName); // "Guest"

// AND operator short-circuits if first value is falsy
let hasPermission = true;
let canEdit = hasPermission && "User can edit content";
console.log("Edit permission:", canEdit); // "User can edit content"

// Practical application - safe property access
let user = null;
let userEmail = user && user.email; // Won't error if user is null
console.log("User email:", userEmail); // null (safe)



// Function declaration - teaching JavaScript a new "recipe"
function sayHello() {
    console.log("Hello, welcome to JavaScript functions!");
    console.log("Functions make code reusable and organized.");
}

// Function call - asking JavaScript to follow the recipe
sayHello();


function lineBreakHelper() {
    console.log("\n".repeat(10));
}


lineBreakHelper()


function displayWelcomeMessage() {
    console.log("=================================");
    console.log("🎉 Welcome to Our Application! 🎉");
    console.log("=================================");
    console.log("Please follow the instructions below:");
    console.log("");
}

// Now we can use this formatted welcome anywhere
displayWelcomeMessage(); // At the start of the program
console.log("User logged in successfully.");
displayWelcomeMessage(); // After login
console.log("Loading user dashboard...");
displayWelcomeMessage(); // On dashboard load


lineBreakHelper()

function displayHeader() {
    console.log("╔════════════════════════════════╗");
    console.log("║     STUDENT GRADE SYSTEM       ║");
    console.log("╚════════════════════════════════╝");
}

function displayMenu() {
    console.log("\nAvailable Options:");
    console.log("1. Calculate Grade");
    console.log("2. View Grade History");
    console.log("3. Update Student Info");
    console.log("4. Exit Program");
}

function displayFooter() {
    console.log("\n" + "=".repeat(35));
    console.log("Thank you for using our system!");
    console.log("© 2025 Student Management System");
}

// Main program
displayHeader();
displayMenu();
displayFooter();


lineBreakHelper()





// Function without parameters - always does the same thing
function sayHelloToJohn() {
    console.log("Hello, John!");
}

// Function with parameter - can greet anyone
function sayHello(name) {
    console.log("Hello, " + name + "!");
}

// Using the flexible function
sayHelloToJohn(); // Always says "Hello, John!"

sayHello("Sarah");    // "Hello, Sarah!"
sayHello("Michael");  // "Hello, Michael!"
sayHello("Dr. Smith"); // "Hello, Dr. Smith!"

lineBreakHelper()





function calculateGrade(assignment1, assignment2, assignment3) {
    let total = assignment1 + assignment2 + assignment3;
    let average = total / 3;
    
    console.log("Grades entered:", assignment1, assignment2, assignment3);
    console.log("Total points:", total);
    console.log("Average:", average.toFixed(1));

    
    // Determine letter grade
    if (average >= 90) {
        console.log("Letter Grade: A");
    } else if (average >= 80) {
        console.log("Letter Grade: B");
    } else if (average >= 70) {
        console.log("Letter Grade: C");
    } else if (average >= 60) {
        console.log("Letter Grade: D");
    } else {
        console.log("Letter Grade: F");
    }
}

// Using the function with different students' grades
calculateGrade(95, 87, 92);  // Student 1
calculateGrade(78, 82, 85);  // Student 2
calculateGrade(65, 58, 72);  // Student 3





lineBreakHelper();


function generateEmailSignature(name, title, department, phone, email) {
    let signature = `
──────────────────────────────
${name}
${title}
${department}
📞 ${phone}
📧 ${email}
──────────────────────────────
    `;
    
    console.log(signature);
}

generateEmailSignature(
    "Dr. Sarah Mitchell",
    "Professor of Computer Science", 
    "Technology Department",
    "555-123-4567",
    "s.mitchell@university.edu"
);


lineBreakHelper()

// Function that returns a value
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum; // Send the result back to whoever called this function
}

// Using the returned value
let result = addNumbers(15, 27);
console.log("The sum is:", result); // 42

// You can use the returned value in other calculations
let doubleResult = addNumbers(10, 5) * 2;
console.log("Double the sum:", doubleResult); // 30

// Or in other functions
function addThreeNumbers(a, b, c) {
    let firstSum = addNumbers(a, b);
    let finalSum = addNumbers(firstSum, c);
    return finalSum;
}

let bigSum = addThreeNumbers(10, 20, 30);
console.log("Sum of three numbers:", bigSum); // 60


lineBreakHelper();



// Grade calculator that returns the average
function calculateAverage(grade1, grade2, grade3) {
    let total = grade1 + grade2 + grade3;
    let average = total / 3;
    return average;
}

// Letter grade function that uses the average
function getLetterGrade(numericGrade) {
    if (numericGrade >= 90) return "A";
    if (numericGrade >= 80) return "B";
    if (numericGrade >= 70) return "C";
    if (numericGrade >= 60) return "D";
    return "F";
}

const grades = [85, 92, 78];

grades[0]

// String formatter that returns formatted text
function formatStudentReport(name, grades) {
    let average = calculateAverage(grades[0], grades[1], grades[2]);
    let letterGrade = getLetterGrade(average);
    
    return `Student: ${name}
Grades: ${grades.join(", ")}
Average: ${average.toFixed(1)}
Letter Grade: ${letterGrade}`;
}

// Using all functions together
let student1Average = calculateAverage(85, 92, 78);
let student1Letter = getLetterGrade(student1Average);
let student1Report = formatStudentReport("Alex Rodriguez", [85, 92, 78]);

console.log("Average:", student1Average.toFixed(1));
console.log("Letter Grade:", student1Letter);
console.log("\nComplete Report:");
console.log(student1Report);