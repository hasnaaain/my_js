//video 12 js playlist
//there is libray for maths in js which is MAth
console.log(Math)

//used to show +ve or absolute value
console.log(Math.abs(-22));

//used to round of the value
console.log(Math.round(4.6))//output=5

//agr zra c b 4 sy bri hui to round of kray ga
console.log(Math.ceil(4.2))
//output= 5


// agr zra c b value 5 k qreb hui ti round of nhi kry ga 
console.log(Math.floor(4.9))
//output= 4


// #### squareroot ###
console.log(Math.sqrt(25))
//output=5

// sin,cos,tan,min,max,power,random

console.log(Math.min(2,34,12,45,76));
console.log(Math.max(2,34,12,45,76));

// ###### random function####\

// -> Always give value between 0 and 1
console.log(Math.random());

// to get values in numbers not points multiply by 10 ,100 etc
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));//to ignore decimal 

// value is generated from 0 to 9 but we want from 1 to 9
console.log((Math.random() * 10)+1);


// formula to define min max random value
const min = 1
const max = 6
//formula= (max - min + 1) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
