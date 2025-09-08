//lec 21 & 22 scope of fx
//global scope and local (block)
//vaariable in global scope can be accesed by local one but lcoal cant access it outside its scope
// let & cosnt follows this rule
//but var didnt obay this rule

function one() {
  const username = "hasnAin";

  function two() {
    let app = "VScode";
    console.log(username);
  }
  //console.log(app)//local scope
  two();
  console.log("code after two function")
}

one();





if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
    //  console.log(website);error  duw to  out of scope 
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//function type 1
console.log(addone(5))//we can here call it before declareation

function addone(num){
    return num + 1
}


// (hoisting) you cant use it before declaration
// /function type 2
console.log(addTwo(5))
// // will throw error due to undefinrd variable
const addTwo = function(num){
    return num + 2
}