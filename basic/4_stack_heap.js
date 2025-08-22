let email= "abc@gmail.com";
let Name= email;

console.log(email);
console.log(Name);

// this is stack , changes occurs in the copy of variable

// *************************
// in heap the changes occurs in the actual varible or Reference
// heap is in nonprimitve datatypes(Object,function,array)
let user1 ={
    Name: "Ali",
    roll: 20,
}

console.log(user1);
let user2=user1;
user1.roll=30;

console.log(user2);
console.log(user1);
// for specific value print of Object
console.log(user2.Name);