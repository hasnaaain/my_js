// date lec # 13
let mydate = new Date()
console.log("toString=",mydate.toString());
console.log("toLocaleDateString=",mydate.toLocaleDateString());
console.log("toLocaleString=",mydate.toLocaleString());// date with time
console.log("toDateString=",mydate.toDateString());//date with day name (sat june 28 2025)
console.log("toISOString=",mydate.toISOString());
console.log("toJSON=",mydate.toJSON());
console.log("toLocaleTimeString=",mydate.toLocaleTimeString());

//to string
// toLocaleString
// toLocaleDateString
// toDateString



//date is object type 
console.log(typeof mydate);

// we can pas parameter in date
//const newdate = new Date(2022,0,12)// 0= january, month starts from 0 in js 
const newdate = new Date(2022-1-12)
// const newdate = new Date(2022,0,12,2,3)
// console.log(newdate.toDateString())
console.log(newdate.toLocaleString())
console.log(newdate.toString());


