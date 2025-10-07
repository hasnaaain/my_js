// for of

//syntax:  for (const element of object ) {  }
//objetc is anything array,string etc
    


const student =["ali","ahsan","senku","killua",404]
for (const ind of student) {
console.log(`Name of students are ${ind}`);

    
}

//for of on string

let Name = "Hasnain"
for (const ind of Name) {
    console.log(`each character in string = ${ind}`);
    
}

//maps 
// A Map is a built-in JavaScript object that stores key-value pairs where:

// Keys can be any data type (objects, numbers, strings, etc.)

// Insertion order is preserved

// It provides better performance and features than plain objects in many use cases

//holds unique value ignores the repeted 

//**map isnt iterateable on for in loop**/



const MAP = new Map();
MAP.set("pak","PAKISTAN")
MAP.set("USA","United states of America")
MAP.set("RS","Russia")
// console.log(MAP);

for (const [one , two ]of MAP) {
    console.log(one,":",two);
    
}//simple one is for both k and v but in array// both elements are for key as val 
