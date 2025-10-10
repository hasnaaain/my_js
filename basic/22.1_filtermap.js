//lec 30 18:50 min filter and reduce
//maps

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = num.map((item) => item * 10);
//console.log(result);

//chaining
//map().map().filter()
// previous vlaues are input of next fx

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const RESULT = nums
.map((item) => {return item*10})
.map((item)=> ( item+1))
.filter((item)=> ( item >40));
console.log(RESULT);
