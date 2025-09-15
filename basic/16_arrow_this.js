//lec 23
//THIS and arrow function in js

const user = {
  username: " haider",
  age: 12,
  welcomemessage: function () {
    console.log(`${this.username},welcome to our website`);
    //console.log(this)// shows the changes at runtime
  },
};
// user.welcomemessage()//haider wellcome to our website
// user.username = " hasnain"
// user.welcomemessage()//hasnain wellcome to our website
// console.log(this)//{}empty oject in node environment,in browser the global obect is windows

// ##############
//"This" in a function vs object
//"This is working in objects only not funtiosn"

function fx() {
  let marks = 20;
  console.log(this); //<ref *1> Object [global].........
  //console.log(this.marks)// wont work in fx //output = undefined
}

//fx()

// _____________________________________________
//simple function syntax

function data() {
  let username = "GON";
  console.log(this.username);
}

//data()//undefined
// variable function syntax

const phone = function () {
  let username = "GON";
  console.log(this.username);
};
phone(); //undefined
//__________________Arrow fucntion_________________
//remove funtion keyword
// add => after ()

const user23 = () => {
  let username = "GON";
  console.log(this.username);
  console.log(this);
};
user23(); //{}output
//basic diff between arrow & simple funciton is we

// _____________basic arrow fx_____________________

const user22 = (num1, num2) => {
  return num1 + num2;
};

console.log(user22(2, 3));

// _______implicit return function____________
//remove {}
//remove return and code in same line after =>
//if use {} must use return

const user42 = (num1, num2) => num1 + num2;
//same
const user42=(num1,num2)=> (num1+num2);//follow this syntax ,opr wala b same hy lkin is my () use huay hy => k bad
console.log(user42(3, 3));

//returning the object in arrow fucntion
const objectfx = () => ({ nam: "haider", roll: 23 });
console.log(objectfx());
