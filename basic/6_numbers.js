//max ,min values to be store in number
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);


// --> 2 ways to decalre num 
let num = 200;
console.log(num);

// -->but if we want to be sure that variable is 100% numebr 
// -->or we specify the datatype
let num2 = new Number(400);
console.log(num2);

// -->how to change the datatype of variable
console.log(num2.toString());
console.log("type of num2 is =", typeof num2);
// -->so now num2 is converted to string so it have strings functoins too
console.log(num2.toString().length);
console.log(num2.toFixed(2));//used to show decimal point values upto fixed num in ()
// output 400.00

// ######### before decimal (point) precision###########
const price = 23.794
console.log(price.toPrecision(3))// 3 means before decimal 3 num ka precision
//output 23.8 (round off krta hy)
const otherprice = 123.69;
console.log(otherprice.toPrecision(3));
//output = 124

// ##################METHODS used##########
// toString()
// toString().length
// toFixed(2)
// toPrecision(3)
