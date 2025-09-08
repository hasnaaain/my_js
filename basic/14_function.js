//lec 20 functions part2

function calculateprice(...num1) {
  //... whrn we r unknown how many argumetns we will get
  return num1;
}
console.log(calculateprice(200, 300, 400)); //[200,300,400]

// ########### little diff of argumens passign
function calculate_price(val1, val2, ...num1) {
  //... whrn we r unknown how many argumetns we will get
  return num1;
}
console.log(calculate_price(200, 300, 400, 500, 600));

// #################### passing object in function

const user = {
  username: "Hasnain",
  price: 200,
};
function callingobject(anyobject) {
  console.log(
    `the username is ${anyobject.username} & price is ${anyobject.price}`
  );
}
//callingobject(user)//you can define the object in function
callingobject(
  (user2 = {
    username: "Hasnain___",
    price: 200,
  })
);

// ######## passing array in function
//fx to dispaly 2nd elemnt of array

const newarray = [1, 2, 3, 4];
function returnsecondvalue(getarray) {
  console.log(`2nd value is ${newarray[1]}`)
//   console.log(getarray[2]);
  return getarray[2];
  
  
}
//returnsecondvalue([200,300,100])
console.log(returnsecondvalue([100, 200, 300]));
