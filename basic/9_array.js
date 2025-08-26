//arrays take anything as input
//we merge arrays byy concat or push 1array to anothr but it is not right way

const stdname = ["haider", "hasnain", "ali"];
const marks = [17, 12, 18];

// stdname.push(marks)
// console.log(stdname);//[ 'haider', 'hasnain', 'ali', [ 17, 12, 18 ] ]
// console.log(stdname[3]);//[ 17, 12, 18 ]

// but we use concat,concat use 3rd array to store combined 2 arrays & stores indivial element

let stdrecord = stdname.concat(marks)
console.log(stdrecord);// [ 'haider', 'hasnain', 'ali', 17, 12, 18 ]


// push( ) return combined array
//but concat retrn a new 3rd array

// but professionaly  we use spread, works same as concat
//spread operator
const stdrec = [...marks, ...stdname];
console.log(stdrec);// [ 17, 12, 18, 'haider', 'hasnain', 'ali' ]

// its rare case when we have nested arrays and want to return all valyes seperatedly so we use flat()

const array_1 = [1, 2, 3, [4, 5], 6, 7, [2, [4, 6]], 3];
const array_2 = array_1.flat(Infinity);
console.log(array_2); //output// [ 1, 2, 3, 4, 5, 6, 7, 2, 4, 6, 3 ]
// [
//     1, 2, 3, 4, 5,
//     6, 7, 2, 4, 6,
//     3
//   ]


// ## convert anydatatype in array##

console.log(Array.isArray("hasnain"))// false
console.log(Array.from("hasnain"))// output [ 'h','a', 's','n', 'a', 'i','n']
console.log(Array.from({name:"hasnain"}))//return empty arry,[] (empty array, because plain objects are not iterable like strings or arrays)


// ## convert variables to array##

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))

