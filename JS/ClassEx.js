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