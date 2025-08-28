// 2  typs  of  objects  1-literals(  )  2-sinngleton(made with  constructors)(unique single object)
let stdsym = Symbol//first declare symbol then use it in object
const student={//This is literals type
    Name : "hasnain",
    roll : 10,
    ispresent: true,
    [stdsym] : 100,
    ondays : ["monday","tuesday"]
}
//console.log(student[Name]);//will throw erro bcs we didnit use "" with string 
//console.log(student.stdsym);//also a method but we dont use it bcs if string datatype and syntax issue
console.log("This is symbol=",student[stdsym]);//syntx to print symbol,"" wont work 
console.log("This is roll=",student["roll"]);
console.log("This is boolean=",student["ispresent"]);
console.log("This is arr=",student["ondays"]);

//making cahnges in the object keys syntax: object.key = new value 

student.roll = 20
console.log(student["roll"])
//but if we freeze the object so that no changes will happen 
//Object.freeze(student)

student.roll = 30
console.log(student["roll"])// no changes will happen and no error will come


// adding function in objct
//syntax: objectname.newname = function(){ lines}
student.profile = function(){
    console.log("hello world")
}

// or
// const student = {
//     profile: function() {
//         console.log("hello world")
//     }
// }


console.log(student.profile)//function anonymous
console.log(student.profile())//hello world

student.profiletwo = function(){
    console.log(`hello world, ${this.Name}`)//this refers to the object that owns the method, which is student
}//hello world, hasnain
console.log(student.profiletwo())//call

// undefined is due to fucntion is logging but  isnt returning 