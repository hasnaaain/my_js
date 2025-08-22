/* Step-by-Step Guide to Variables in JavaScript */

// Step 1: Declaring Variables and Defining Data Types
// JavaScript is dynamically typed, so no explicit type declaration is needed.
// Variables are declared using var, let, or const.

// 1.1 Naming Rules for Variables
// - Must start with a letter, underscore (_), or dollar sign ($).
// - Can contain letters, numbers, underscores, or dollar signs.
// - Case-sensitive (e.g., myVar and MyVar are different).
// - Cannot use reserved words (e.g., let, const, var).
// - Use camelCase for readability (e.g., myVariableName).

// 1.2 Declaring Variables with Different Data Types

// Number (integer or floating-point)
let age = 25; // Integer
const PI = 3.14; // Floating-point
var temperature = -10.5; // Negative floating-point

// String (text)
let userName = "Alice";
const greeting = 'Hello, World!'; // Single quotes work too
var email = `user@example.com`; // Template literal (backticks)

// Boolean (true or false)
let isActive = true;
const hasAccess = false;
var isLoggedIn = true;

// Array (ordered list of values)
let numbers = [1, 2, 3, 4, 5];
const colors = ["red", "blue", "green"];
var mixedArray = [1, "text", true];

// Object (key-value pairs)
let person = {  name: "Bob",
                 age: 30, 
                 isStudent: false };
const settings = { theme: "dark", fontSize: 16 };
var car = { brand: "Toyota", model: "Camry" };

// Step 2: Printing Variables to the Screen
// Use console.log() to display values in the console.

// 2.1 Printing Numbers
console.log("Age:", age); // Output: Age: 25
console.log("PI:", PI); // Output: PI: 3.14
console.log("Temperature:", temperature); // Output: Temperature: -10.5

// 2.2 Printing Strings
console.log("User Name:", userName); // Output: User Name: Alice
console.log("Greeting:", greeting); // Output: Greeting: Hello, World!
console.log("Email:", email); // Output: Email: user@example.com

// 2.3 Printing Booleans
console.log("Is Active:", isActive); // Output: Is Active: true
console.log("Has Access:", hasAccess); // Output: Has Access: false
console.log("Is Logged In:", isLoggedIn); // Output: Is Logged In: true

// 2.4 Printing Arrays
console.log("Numbers:", numbers); // Output: Numbers: [1, 2, 3, 4, 5]
console.log("Colors:", colors); // Output: Colors: ["red", "blue", "green"]
console.log("Mixed Array:", mixedArray); // Output: Mixed Array: [1, "text", true]

// 2.5 Printing Objects
console.log("Person:", person); // Output: Person: { name: "Bob", age: 30, isStudent: false }
console.log("Settings:", settings); // Output: Settings: { theme: "dark", fontSize: 16 }
console.log("Car:", car); // Output: Car: { brand: "Toyota", model: "Camry" }

// Step 3: Performing Operations on Variables
// Operations depend on the data type.

// 3.1 Operations on Numbers
let sum = age + 10; // Addition
let area = PI * 2 * 2; // Multiplication (area of circle with radius 2)
let celsius = (temperature * 9/5) + 32; // Convert to Fahrenheit
console.log("Sum (age + 10):", sum); // Output: Sum (age + 10): 35
console.log("Area (PI * r^2):", area); // Output: Area (PI * r^2): 12.56
console.log("Temperature in Fahrenheit):", celsius); // Output: Temperature in Fahrenheit: 13.1

// 3.1 Arithmetic Operations
// + (addition), - (subtraction), * (multiplication), / (division), % (modulus), ** (exponentiation)
let x = 10;
let y = 3;
console.log("x - y =", x - y); // Output: x - y = 7
console.log(x - y); // Output: y = 3
console.log("x * y =", x * y); // Output: x * y = 30
console.log("x / y =", x / y); // Output: x / y = 3.333333333333333
console.log("x % y =", x % y); // Output: x % y = 3
console.log("x ** y =", x ** y); // Output: x ** y = 1000

// 3.2 Operations on Strings
let fullGreeting = greeting + " from " + userName; // Concatenation
let upperEmail = email.toUpperCase(); // Convert to uppercase
let emailLength = email.length; // Get string length
console.log("Full Greeting:", fullGreeting); // Output: Full Greeting: Hello, World! from Alice
console.log("Uppercase Email:", upperEmail); // Output: Uppercase Email: USER@example.com
console.log("Email Length:", emailLength); // Output: Email Length: 16

// 3.3 Operations on Booleans
let canVote = age >= 18 && isActive; // Logical AND
let isGuest = !hasAccess; // Logical NOT
let canAccess = isLoggedIn || isActive; // Logical OR
console.log("Can Vote:", canVote); // Output: Can Vote: true && true AND = true
console.log("Is Guest:", isGuest); // Output: Is Guest: true
console.log("Can Access:", canAccess); // Output: Can Access: true

// 3.4 Operations on Arrays
numbers.push(6); // Add element to array
colors.pop(); // Remove last element
mixedArray[1] = "updated"; // Update element at index 1
console.log("Updated Numbers:", numbers); // Output: Updated Numbers: [1, 2, 3, 4, 5, 6]
console.log("Updated Colors:", colors); // Output: Updated Colors: ["red", "blue"]
console.log("Updated Mixed Array:", mixedArray); // Output: Updated Mixed Array: [1, "updated", true]

// 3.5 Operations on Objects
person.age += 1; // Increment age
settings.theme = "light"; // Update property
car.model = "Corolla"; // Update property
console.log("Updated Person:", person); // Output: Updated Person: { name: "Bob", age: 31, isStudent: false }
console.log("Updated Settings:", settings); // Output: Updated Settings: { theme: "light", fontSize: 16 }
console.log("Updated Car:", car); // Output: Updated Car: { brand: "Toyota", model: "Corolla" }