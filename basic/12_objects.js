//lecture 17
// sinleton objects(constructor decalred)

const tiktokuser = new Object();
tiktokuser.id = 123; //you can ignore ";""
tiktokuser.name = "haider";
tiktokuser.isloggedin = false;

//console.log(tiktokuser);

//declaring objects in object (nesting)
//nested objects
const YTuser = {
  email: "abc@gmail.com",
  username: {
    fullname: {
      firstname: " Syed ",
      lastname: " Hasnain",
    },
  },
};
console.log(YTuser.username);

// merging two objects like we did with array

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };
//console.log(obj1,obj2) //but it display 2 objects not values
const obj3 = Object.assign({}, obj1, obj2);
console.log("object 3=",obj3);
// ------------------------------------------------------------
//spread oprerator used to store each value as a separate individual
const obj4 = { ...obj1, ...obj2 };
console.log("object 4 =",obj4);

// both merging and spread are same but we will use spread

//when value or data comes from database it comes in array of objects form (json format)

const usersdata = [
  { id: 1, email: "user1@gmail.com" },
  { id: 2, email: "user2@gmail.com" },
  { id: 3, email: "user3@gmail.com" },
];

console.log(usersdata[1]);//2nd user ki id email

//can dislay keys and values of object and output will in array
const instauser = new Object();
instauser.id = 123; //you can ignore ;
instauser.name = "haider";
instauser.isloggedin = false;
console.log("object keyss =", Object.keys(instauser));
console.log("object values =", Object.values(instauser));
console.log("object keys & values =", Object.entries(instauser)); //displays keys:values

// ============== Object de-structure and JSON API ==============

let course = {
  courseName: "Javascript ",
  coursePrice: "free",
  courseInstructor: "ben",
};

// console.log(course.courseInstructor);
let { courseInstructor: instructor } = course; //object de-structuring// its done with curly braces
//__________________________^___used as renamed _____________
console.log(instructor);//ben
