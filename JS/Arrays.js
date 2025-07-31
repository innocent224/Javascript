// Declaration examples
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = ['John', 25, true, 'developer'];
let empty = [];

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits[2]); // 'orange'
console.log(fruits.length); // 3

lineBreakHelper()

let groceries = ['milk', 'bread'];
groceries.push('eggs');
console.log(groceries); // ['milk', 'bread', 'eggs']

// Multiple items
groceries.push('cheese', 'butter');
console.log(groceries); // ['milk', 'bread', 'eggs', 'cheese', 'butter']

// Real-world example: Shopping cart
let cart = [];
cart.push('laptop');
cart.push('mouse', 'keyboard');
console.log("Carthas${cart.length} items:, cart");

function lineBreakHelper() {
    console.log("\n".repeat(5));
}


lineBreakHelper()

let todoList = ['grocery shopping', 'laundry'];
todoList.unshift('urgent meeting');
console.log(todoList); // ['urgent meeting', 'grocery shopping', 'laundry']

// Real-world example: News feed
let news = ['Sports update', 'Weather'];
news.unshift('Breaking News');
console.log(news); // ['Breaking News', 'Sports update', 'Weather']


lineBreakHelper()


let stack = ['first', 'second', 'third'];
let removed = stack.pop();
console.log(removed); // 'third'
console.log(stack); // ['first', 'second']

// Real-world example: Undo functionality
let actions = ['typed hello', 'deleted word', 'typed world'];
let lastAction = actions.pop();
console.log("Undoing: ${lastAction}");

lineBreakHelper()

let queue = ['Alice', 'Bob', 'Charlie'];
let served = queue.shift();
console.log("Now serving: ${served}"); // 'Alice'
console.log(queue); // ['Bob', 'Charlie']

// Real-world example: Processing orders
let orders = ['Order #1', 'Order #2', 'Order #3'];
while(orders.length > 0) {
    let currentOrder = orders.shift();
    console.log("Processing: ${currentOrder}");
}


lineBreakHelper()

let alphabet = ['a', 'b', 'c', 'd', 'e'];
let portion = alphabet.slice(1, 4);
console.log(portion); // ['b', 'c', 'd']
console.log(alphabet); // ['a', 'b', 'c', 'd', 'e'] - unchanged

// Common patterns
let wholeNumbers = [1, 2, 3, 4, 5, 6];
console.log(wholeNumbers.slice(2)); // [3, 4, 5, 6] - from index 2 to end
console.log(wholeNumbers.slice(-2)); // [5, 6] - last 2 elements
console.log(wholeNumbers.slice()); // [1, 2, 3, 4, 5, 6] - full copy

// Real-world example: Pagination
let products = ['laptop', 'phone', 'tablet', 'watch', 'headphones', 'speaker'];
let page1 = products.slice(0, 3); // First 3 products
let page2 = products.slice(3, 6); // Next 3 products
console.log('Page 1:', page1);
console.log('Page 2:', page2);

lineBreakHelper()

let colors = ['red', 'blue', 'green', 'blue', 'yellow'];
console.log(colors.indexOf('blue')); // 1 (first occurrence)
console.log(colors.indexOf('purple')); // -1 (not found)

// Real-world examples
let users = ['admin', 'john_doe', 'jane_smith', 'admin'];
if (users.indexOf('admin') !== -1) {
    console.log('Admin user found');
}

// Finding from specific position
console.log(colors.indexOf('blue', 2)); // 3 (search starts from index 2)

// Practical usage: Checking permissions
let permissions = ['read', 'write', 'delete'];
function hasPermission(permission) {
    return permissions.indexOf(permission) !== -1;
}
console.log(hasPermission('write')); // true

lineBreakHelper()




let ingredients = ['flour', 'eggs', 'milk', 'sugar'];
console.log(ingredients.includes('eggs')); // true
console.log(ingredients.includes('chocolate')); // false

// Real-world examples
let allowedExtensions = ['.jpg', '.png', '.gif', '.svg'];
let filename = 'profile.jpg';
let extension = filename.substring(filename.lastIndexOf('.'));
if (allowedExtensions.includes(extension)) {
    console.log('Valid image file');
}

// User roles checking
let userRoles = ['user', 'moderator'];
let requiredRole = 'admin';
if (!userRoles.includes(requiredRole)) {
    console.log('Access denied');
}

// Case-sensitive checking
let tags = ['JavaScript', 'React', 'Node.js'];
console.log(tags.includes('javascript')); // false - case matters!
console.log(tags.includes('JavaScript')); // true

lineBreakHelper()

function addNumber(a, b) {

}

const addNumberss = (a, b) => {

}


let names = ['Alice', 'Bob', 'Charlie'];
names.forEach( (item) => {
    console.log(Hello, "${item}!");
}

) ;

// Arrow function syntax (introduce gradually)
names.forEach(name => console.log(`Goodbye, ${name}`));

// Accessing index
let scores = [85, 92, 78, 96];
scores.forEach(function(score, index) {
    console.log("Student ${index + 1}: ${score}%");
});

// Real-world examples
let emails = ['user1@email.com', 'user2@email.com', 'user3@email.com'];
emails.forEach(function(email) {
    console.log("Sending newsletter to: ${email}");
    // Simulate sending email
});

// Processing form data
let formInputs = ['John Doe', '30', 'Developer'];
let labels = ['Name', 'Age', 'Profession'];
formInputs.forEach(function(input, index) {
    console.log("${labels[index]}: ${input}");
});

// Modifying external variables (side effects)
let total = 0;
let prices = [10.99, 25.50, 5.75, 12.00];
prices.forEach(function(price) {
    total += price;
});
console.log("Total: $${total.toFixed(2)}");

lineBreakHelper()



// Building a student management system
let students = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Ross'];
let grades = [85, 92, 78, 96];

// Finding high performers
let highPerformers = [];
grades.forEach(function(grade, index) {
    if (grade >= 90) {
        highPerformers.push(students[index]);
    }
});
console.log('High performers:', highPerformers);

// Creating a shopping cart system
let cartt = [];
let inventory = ['laptop', 'mouse', 'keyboard', 'monitor'];

// Add items to cart
// ['laptop', 'mouse']
let sliced = inventory.slice(0, 2);

sliced.forEach(function(item) {
    cartt.push(item);
});

console.log('Cart contents:', cartt);
console.log('Items remaining:', inventory.slice(2));

// Real-world example: Processing user preferences
let allCategories = ['tech', 'sports', 'music', 'movies', 'books'];
let userPreferences = ['tech', 'music'];
let recommendations = [];

allCategories.forEach(function(category) {
    if (userPreferences.includes(category)) {
        recommendations.push("Recommended ${category} content");
    }
});
console.log(recommendations);

lineBreakHelper();




// Simple transformation
let myWholeNumbers = [1, 2, 3, 4, 5];
let doubled = myWholeNumbers.map(
    function(number) {
        return number * 2;
    }
);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(myWholeNumbers); // [1, 2, 3, 4, 5] - unchanged!

// Arrow function version (introduce gradually)
let tripled = myWholeNumbers.map(number => number * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// Working with strings
let theirNames = ['alice', 'bob', 'charlie'];
let capitalizedNames = theirNames.map(function(name) {
    let firstLetterOfName = name.charAt(0).toUpperCase();
    let sliceAtIndex = name.slice(1);

    let value = firstLetterOfName + sliceAtIndex; // Concatenate first letter and rest of the name

    return value
});
console.log(capitalizedNames); // ['Alice', 'Bob', 'Charlie']

// Real-world example: Converting temperatures
let celsiusTemps = [0, 10, 20, 30, 40, [23, 25]]; // Nested array
let fahrenheitTemps = celsiusTemps.map(function(celsius) {
    return (celsius * 9/5) + 32;
});
console.log('Celsius:', celsiusTemps);
console.log('Fahrenheit:', fahrenheitTemps); // [32, 50, 68, 86, 104]

// Processing user data
let ourUser = ['john_doe', 'jane_smith', 'bob_wilson'];
let userProfiles = ourUser.map(username => {
    let result = {
        username: username,
        displayName: username.replace('_', ' ').toUpperCase(),
        profileUrl: https//mysite.com/ourUser/${username}
    };

    return result;
});
console.log(userProfiles);

 [
   {
    username: 'john_doe',
    displayName: 'JOHN DOE',
    profileUrl: 'https://mysite.com/ourUser/john_doe'
  },
//  ... more users
]


lineBreakHelper();

// Using index parameter
let items = ['apple', 'banana', 'cherry'];
let indexedItems = items.map(function(item, index) {
    return "${index + 1}. ${item}";
});
console.log(indexedItems); // ['1. apple', '2. banana', '3. cherry']

// Real-world example: Creating HTML elements
let menuItems = ['Home', 'About', 'Services', 'Contact'];
let htmlMenu = menuItems.map(function(item, index) {
    return <li class="menu-item-${index}"><a href="#${item.toLowerCase()}">${item}</a></li>;
});
console.log(htmlMenu.join('\n'.repeat(5)));

// Processing form data
let rawFormData = ['John Doe', '30', 'john@email.com', 'Developer'];
let formLabels = ['name', 'age', 'email', 'profession'];
let formattedData = rawFormData.map(function(value, index) {
    return {
        field: formLabels[index],
        value: value,
        id: "field_${formLabels[index]}"
    }
});

console.log(formattedData);

// Price calculations
let theseProducts = [
    { 
        name: 'Laptop',
        price: 999.99,
        model: {
            name: 'XPS 13',
            year: 2023
        }
    },
    { name: 'Mouse', price: 25.50 },
    { name: 'Keyboard', price: 75.00 }
];

const answer = theseProducts[0].model.year
console.log(answer); 

let productsWithTax = theseProducts.map(function(product) {
    return {
        name: product.name,
        originalPrice: product.price,
        priceWithTax: (product.price * 1.08).toFixed(2),
        savings: (product.price * 0.1).toFixed(2)
    };
});
console.log(productsWithTax);


lineBreakHelper();


// Basic sum example
let Numbers = [1, 2, 3, 4, 5];
let sum = Numbers.reduce(function(accumulator, currentNumber) {
    console.log(`Acc: ${accumulator}, Current: ${currentNumber}`);
    return accumulator + currentNumber;
}, 0);
console.log('Sum:', sum); // 15

// Step by step breakdown:
// Iteration 1: Acc: 0, Current: 1 → return 0 + 1 = 1
// Iteration 2: Acc: 1, Current: 2 → return 1 + 2 = 3
// Iteration 3: Acc: 3, Current: 3 → return 3 + 3 = 6
// Iteration 4: Acc: 6, Current: 4 → return 6 + 4 = 10
// Iteration 5: Acc: 10, Current: 5 → return 10 + 5 = 15

// Finding maximum
let Ourscores = [85, 92, 78, 96, 88];
let highestScore = Ourscores.reduce(function(max, currentScore) {
    return currentScore > max ? currentScore : max;
}, 0); 
console.log('Highest score:', highestScore); // 96

// Concatenating strings
let words = ['Hello', 'beautiful', 'world'];
let sentence = words.reduce(function(result, word) {
    return result + ' ' + word;
}, '');
console.log(sentence.trim()); // 'Hello beautiful world'