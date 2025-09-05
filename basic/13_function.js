//19 lecture

// fx definition
function display() {
  console.log("H");
  console.log("E");
  console.log("L");
  console.log("L");
  console.log("O");
}
display(); //function call

// fx to add 2 num
function sum(num1, num2) {
  //paramters
  console.log(typeof (num1 + num2));//number
}

sum(2, 3); //arguments //type numbre
sum(2, "3"); //arguments //type string
sum(2, "ABC"); //arguments//type string
sum("2", "3"); //arguments//type string
sum("2", "AB"); //arguments//type string
sum("2", null); //arguments//type string
sum("2", undefined); //arguments//type string
sum(2, null); //arguments//type number
sum(2, undefined); //arguments//type number
//console.log(sum(3,3))




// ##############
// fx to * 2 num
function multiply(num1, num2) {
  //paramters
  //console.log ((num1 * num2))
  return num1 * num2; //if we omit this return then we cant assign value of fx to variable
}

const result = multiply(2, 3);
console.log("value of result =", result); //6// will be undefined if return is omitted
console.log(`the value of result = ${result} \n`); //6// will be undefined if return is omitted


// ##############
// fx to * 2 num type 2
function subtract(num1, num2) {
  //paramters
  let result = num1 - num2;
  return result;
  console.log(num1 - num2); //code after "return"is unreachable code
}

const answer = multiply(3, 3);
console.log(answer)




// #################
//
function isloggedin(username = "shah") {
    if(!username )// username === undefined
    {
        console.log("enter a valid username")
        return username
    }
    return `${username}just logged in`
}

console.log(isloggedin("hasnain" ))
console.log(isloggedin( ))//undefined
console.log(isloggedin("" ))// if empty strign// so we use if else for this if(!undefined) 

