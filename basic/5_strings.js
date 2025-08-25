const Name = "hasnain";
const age = 20;
// this is old and unprofessioanl Way
console.log("MY name is " + Name + " & " + age + " is my age");
// NEw Way string interpolation
// -> use backticks ``
// ->use ${} as variable placeholder
// we can use methods with variables in them like uppercase
console.log(`My name is ${Name} & age is ${age}`);

// jaisy mujhy yahn ik integer hi chahiye to 2 treqo sy decalre kru Ga
let num = 200;
console.log(num);
let num2 = new Number(400);
console.log(num2);
// #######################################################
// other way to declare the String
const saiyan = new String("goku-kakarot");
// when you must confirm it as a datatype use thsi

console.log(saiyan);
console.log(saiyan[2]); //for keys to display(k)
console.log(saiyan.length);//for gettig length of string(12)
console.log(saiyan.charAt('2'));//to get the charctaer from index and use '' and use number
console.log(saiyan.indexOf('o'));//use character 
console.log(saiyan.toUpperCase());// use () at end of f(x).

console.log(saiyan.substring(0,4));
// Returns part of the string between start and end (excluding end)
//Rules:
//If start > end, it swaps the two values
//Negative values are treated as 0
//example code
let str = "JavaScript"

console.log(str.substring(0, 4))   // "Java"
console.log(str.substring(4, 0))   // "Java" [start > end, so swapped]
console.log(str.substring(-3, 4))  // "Java" [negative = 0]

// ############################
console.log(saiyan.slice(0,3));
//Returns part of the string between start and end (excluding end)
//Rules:
//Accepts negative indexes to count from end of string
//If start > end, it returns empty string
let Str = "JavaScript"

console.log(Str.slice(0, 4))     // "Java"
console.log(Str.slice(-6, -3))   // "aSc"
console.log(Str.slice(4, 0))     // "" [nothing because start > end]


//to ignore or remove spaces from strigs
let newstirng = "   vegeta"
console.log(newstirng);//output=   vegata
console.log(newstirng.trim());//output=vegeta

//f(x) to replace somethong value that is inputed
let url= "www.youtube.com"
console.log(url.replace("www"," "));
console.log(url.includes('youtube'));//Purpose: Checks whether a string contains a specific substring✔ Returns: true or false,position (optional): the index to start the search (default is 0)



//convert string into arrays
let otherstring="Syed-Hasnain-Ali-Tahir"
console.log(otherstring.split('-'));


// parseInt()
// Syntax: parseInt(string, radix)
// Best for: Extracting an integer from a string (e.g., "42px" → 42).

// Note: Always specify the radix (base), usually 10
// Example:

const STR = "42";
const NUM  = parseInt(STR , 10);
console.log(NUM ); // 42
