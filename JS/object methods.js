// Object creation methods
let student1 = {
    name: 'Alice',
    age: 20,
    grade: 'A',
    subjects: ['Math', 'Physics', 'Chemistry']
};

let student2 = new Object();
student2.name = 'Bob';
student2.age = 19;
student2.grade = 'B';

// Object constructor function (introduce concept)
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
let student3 = new Student('Charlie', 21, 'A');

console.log(student1);
console.log(student2);
console.log(student3);


let myStudent = {
    name: 'David',
    age: 22,
    grade: 'B',
    subjects: ['Biology', 'Mathematics']
}

myStudent.name =  "Eve"; // Changing property value

console.log(myStudent)





let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    color: 'blue',
    mileage: 15000
};

let carProperties = Object.keys(car);
console.log(carProperties); // ['brand', 'model', 'year', 'color', 'mileage']

// Real-world example: Form validation
let userForm = {
    username: 'john_doe',
    email: 'john@email.com',
    password: 'secret123',
    confirmPassword: 'secret123',
    age: 25
};

let requiredFields = ['username', 'email', 'password', 'age'];
let formFields = Object.keys(userForm);

// formFields = ['username', 'email', 'password', 'confirmPassword', 'age'];

let missingFields = requiredFields.filter(field => !formFields.includes(field));
if (missingFields.length === 0) {
    console.log('All required fields present');
} else {
    console.log('Missing fields:', missingFields);
}

// Dynamic property processing
let product = {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    category: 'electronics',
    inStock: true,
    description: 'High-performance laptop'
};


// This is JSON formatted 
let productJSON = {
    'id': 1,
    'name': 'Laptop',
    'price': 999.99,
    'category': 'electronics',
}

console.log('Product properties:');

// This helps to understand how to access properties dynamically
let idOfProduct = product['description']  // 'High Performace Laptop

console.log(`Product ID: ${idOfProduct}`);





Object.keys(product).forEach(function(key) {
    console.log(`${key}: ${product[key]}`);
});

// Counting properties
let inventory = {
    laptops: 15,
    phones: 32,
    tablets: 8,
    headphones: 45,
    keyboards: 22
};

let totalCategories = Object.keys(inventory).length;
console.log(`We have ${totalCategories} product categories`);

// Property existence checking
let settings = {
    theme: 'dark',
    notifications: true,
    language: 'english'
};

function hasAllSettings(settingsObj, requiredSettings) {
    let availableSettings = Object.keys(settingsObj);

    let answer = requiredSettings.every(setting => availableSettings.includes(setting));
    
    return answer
}

console.log(hasAllSettings(settings, ['theme', 'language'])); // true
console.log(hasAllSettings(settings, ['theme', 'fontSize'])); // false






let scores = {
    alice: 95,
    bob: 87,
    charlie: 92,
    diana: 88
};

let allScores = Object.values(scores);
console.log(allScores); // [95, 87, 92, 88]

// Calculate average score
let averageScore = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
console.log(`Average score: ${averageScore.toFixed(1)}`); // 90.5

// Find highest and lowest scores
let highestScore = Math.max(...allScores);
let lowestScore = Math.min(...allScores);
console.log(`Highest: ${highestScore}, Lowest: ${lowestScore}`);

// Real-world example: Inventory management
let warehouse = {
    electronics: 150,
    clothing: 300,
    books: 75,
    furniture: 45,
    toys: 200
};

let stockLevels = Object.values(warehouse);
let totalItems = stockLevels.reduce((total, items) => total + items, 0);
let lowStockItems = stockLevels.filter(stock => stock < 100);

console.log(`Total inventory: ${totalItems} items`);
console.log(`Categories with low stock: ${lowStockItems.length}`);

// Processing all values
let temperatures = {
    monday: 22,
    tuesday: 25,
    wednesday: 18,
    thursday: 30,
    friday: 27,
    saturday: 24,
    sunday: 26
};

let tempValues = Object.values(temperatures);
let celsius = tempValues;
let fahrenheit = celsius.map(temp => (temp * 9/5) + 32);

console.log('Celsius temperatures:', celsius);
console.log('Fahrenheit temperatures:', fahrenheit);

// Data validation example
let userProfile = {
    name: 'John Doe',
    age: 28,
    email: 'john@email.com',
    phone: '123-456-7890'
};

let profileValues = Object.values(userProfile);
let hasEmptyFields = profileValues.some(value => value === '' || value === null || value === undefined);

if (hasEmptyFields) {
    console.log('Profile has missing information');
} else {
    console.log('Profile is complete');
}



let employee = {
    name: 'Sarah Johnson',
    position: 'Developer',
    salary: 75000,
    department: 'Engineering'
};

let employeeEntries = Object.entries(employee);
console.log(employeeEntries);
// [['name', 'Sarah Johnson'], ['position', 'Developer'], ['salary', 75000], ['department', 'Engineering']]

// Processing entries with destructuring
employeeEntries.forEach(function([key, value,]) {
    console.log(`${key}: ${value}`);
});

// Real-world example: Generating reports
let salesData = {
    january: 45000,
    february: 52000,
    march: 48000,
    april: 61000,
    may: 58000
};

console.log('Monthly Sales Report:');
console.log('===================');
Object.entries(salesData).forEach(function([month, sales]) {

    let formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    console.log(`${formattedMonth}: $${sales.toLocaleString()}`);
});

// Converting to different formats
let menuItems = {
    burger: 12.99,
    pizza: 15.50,
    salad: 9.99,
    pasta: 13.25,
    soup: 7.50
};

// Convert to array of objects for easier processing
let menuArray = Object.entries(menuItems).map(function([item, price]) {

    let modifiedObject = {
        item: item,
        price: price,
        formattedPrice: `$${price.toFixed(2)}`,
        category: price < 10 ? 'budget' : price < 15 ? 'mid-range' : 'premium'
    };

    return modifiedObject;
});

console.log('Menu items as objects:', menuArray);

// Filtering based on key-value pairs
let stockPrices = {
    AAPL: 150.25,
    GOOGL: 2800.50,
    MSFT: 300.75,
    TSLA: 250.00,
    AMZN: 3200.25
};

// Find stocks under $500
let affordableStocks = Object.entries(stockPrices)
    .filter(function([stock, price]) {
        return price < 500;
    })
    .map(function([stock, price]) {
        return `${stock}: $${price}`;
    });

console.log('Affordable stocks:', affordableStocks);

// Creating HTML from object data
let userSettings = {
    theme: 'dark',
    fontSize: '16px',
    notifications: true,
    autoSave: false,
    language: 'english'
};

let settingsHTML = Object.entries(userSettings)
    .map(function([setting, value]) {
        return `<div class="setting">
            <label>${setting}:</label>
            <span>${value}</span>
        </div>`;
    })
    .join('\n');

console.log(settingsHTML);