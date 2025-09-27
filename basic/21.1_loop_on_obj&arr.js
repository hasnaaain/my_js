// for of loop on objects
let obj = {
    cpp : "C plus plus",
    js  : "javascript",
    html : "hyper text"
}

// for (const element of obj) {
//     console.log(element);
// }
//TypeError: obj is not iterable

//object is iterated by for in loop
for (const key in obj) {
    // console.log(key);//for keys
    // console.log(obj[key]);//for vlaues
    console.log(`${key} = ${obj[key]}`);//for both key and values
    
    
}

//for in on arrays

const student =["ali","ahsan","senku","killua",404]
for (const key in student) {
    // console.log(key);//for indexes
    // console.log(student[key]);//values
    console.log(`${key} = ${student[key]}`);
    
    
    
}
//will print indexes