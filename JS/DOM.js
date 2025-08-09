// Analogy: Think of the DOM as a family tree 
// for your webpage. Just like a 
// family tree shows relationships between family members, the DOM shows how HTML elements are connected to each other. JavaScript is like having a remote control that lets you change anything on this family tree - you can find specific family members, change their clothes (styling), make them speak (content),
//  or even add new family members.



// Key Concepts:

// DOM stands for Document Object Model
// It's a live representation of your HTML in memory
// JavaScript can read and modify this representation
// Changes happen in real-time on the webpage

// The DOM tree structure
// document (root)
//   └── html
//       ├── head
//       │   └── title
//       └── body
//           ├── h1
//           ├── p
//           └── div
//               └── button

// When you load a webpage, the browser creates this tree structure automatically
console.log(document); // The entire DOM tree
console.log(document.documentElement); // The <html> element
console.log(document.body); // The <body> element


// Syntax: document.getElementById('id-name')



// Example 1: Basic element selection
let title_Element = document.getElementById('main-title');
console.log(title_Element); // Returns the h1 element
console.log(title_Element.textContent); // "Welcome to My Website"

// Example 2: Checking if element exists before using it
let introElement = document.getElementById('intro-text');
if (introElement) {
    console.log('Found the intro:', introElement.textContent);
} else {
    console.log('Intro element not found!');
}

// Example 3: Storing references for later use
let button = document.getElementById('click-me-btn');
let title = document.getElementById('main-title');
let intro = document.getElementById('intro-text');

// Now we can use these variables throughout our code
console.log('Page elements loaded:');
console.log('Button:', button.textContent);
console.log('Title:', title.textContent);
console.log('Intro:', intro.textContent);


// Key Differences:

// querySelector() returns the FIRST matching element
// querySelectorAll() returns ALL matching elements as a NodeList

// Example 1: Selecting by class (first occurrence)
let firstProductCard = document.querySelector('.product-card');
console.log(firstProductCard); // Returns the first div with class "product-card"

// Selecting by ID using querySelector (alternative to getElementById)
let container = document.querySelector('#main-container'); // Same as getElementById

console.log(container);

// Selecting by tag name
let firstHeading = document.querySelector('h2');
console.log(firstHeading.textContent); // "Products"

// Example 2: Selecting all elements with querySelectorAll
let allProductCards = document.querySelectorAll('.product-card');
console.log(allProductCards); // Returns NodeList with both product cards
console.log('Number of products:', allProductCards.length); // 2

// Loop through all selected elements
allProductCards.forEach(function(card, index) {
    console.log(`Product ${index + 1}:, card.querySelector('h3').textContent`);
});

// Example 3: Advanced CSS selectors
// Select all paragraphs inside product cards
let allPrices = document.querySelectorAll('.product-card .price');
allPrices.forEach(price => {
    console.log('Price found:', price.textContent);
});

// Select the first h3 inside any product-card
let firstProductTitle = document.querySelector('.product-card h3');
console.log('First product:', firstProductTitle.textContent);

// Select elements with specific attributes
let elementsWithClass = document.querySelectorAll('[src]'); // All elements that have a class attribute
console.log('Elements with classes:', elementsWithClass.length);







// getElementsByClassName() - Returns live HTMLCollection
let productCards = document.getElementsByClassName('product-card');
console.log('Product cards:', productCards.length);

// getElementsByTagName() - Returns live HTMLCollection  
let allParagraphs = document.getElementsByTagName('p');
console.log('All paragraphs:', allParagraphs.length);

// getElementsByName() - Rarely used, mainly for form elements
// <input name="username" />
let usernameInputs = document.getElementsByName('username');

// Key Difference: Live vs Static collections
console.log('=== Live vs Static Collections Demo ===');

// HTMLCollection (live) - changes automatically when DOM changes
let liveCollection = document.getElementsByClassName('dynamic-item');
console.log('Live collection length:', liveCollection.length);

// NodeList from querySelectorAll (static) - snapshot at time of selection
let staticCollection = document.querySelectorAll('.dynamic-item');
console.log('Static collection length:', staticCollection.length);

// If we add a new element with class 'dynamic-item':
// liveCollection.length will automatically update
// staticCollection.length will stay the same until we query again









// Example 1: textContent vs innerText vs innerHTML
let titleElement = document.getElementById('page-title');
let descriptionElement = document.getElementById('description');

// textContent - Gets/sets all text, including hidden elements
console.log('textContent:', descriptionElement.textContent); 
// "This is the original description."

// innerHTML - Gets/sets HTML content
console.log('innerHTML:', descriptionElement.innerHTML); 
// "This is the <strong>original</strong> description."

// innerText - Gets/sets visible text only
console.log('innerText:', descriptionElement.innerText); 
// "This is the original description."

// Example 2: Changing content
titleElement.textContent = 'New Amazing Title!';
descriptionElement.innerHTML = 'This is the <em>updated</em> description with <strong>HTML formatting</strong>.';

// Example 3: Building dynamic content
let outputDiv = document.getElementById('output');
let userName = 'Alice';
let userScore = 95;

// Using template literals for dynamic content
outputDiv.innerHTML = `
    <h3>Welcome, ${userName}!</h3>
    <p>Your current score is: <span style="color: green; font-weight: bold;">${userScore}/100</span></p>
    <p>Status: ${userScore >= 90 ? 'Excellent!' : 'Keep improving!'}</p>
`;

// Safe way to add text content (prevents XSS attacks)
let userInput = '<script>alert("hacked!")</script>'; // Malicious input
let safeElement = document.createElement('p');
safeElement.textContent = userInput; // This will show the text, not execute the script
outputDiv.appendChild(safeElement);