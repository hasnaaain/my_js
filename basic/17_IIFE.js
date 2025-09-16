// IIFE immediately invoke function expression
//syntax gpt
//semicolon required
(function () {
  console.log("IIFE is running!");
})();

// OR using arrow function gpt:
//remove fucntion keyword & add => after ()
(() => {
  console.log("Arrow function IIFE!");
})();




//practice


(function hello (){
    //named iife
    console.log("hello");
    
})();

( () => {
    console.log("a")
})();
// ____________________passing parameters 
( (num) => {
    console.log(`my age  is ${num} `)
})(19);
//arguments