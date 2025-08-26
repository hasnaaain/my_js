//array
//index from 0 to owards
//array can be of mixed data   
const myarr  = [22,11,23,42,12]
console.log(myarr);//output [22,11,23,42,12]
console.log(myarr[3]);//ouptut 42

// ###### mix array ######//
const  arr2 = ["hasnain",10,5.8]
console.log(arr2);//output ["hasnain",10,5.8]

//####  array methods  #####//
const  arr3 =  ["haider",20,23.3]

arr3.pop();//output [ 'haider', 20, ]

arr3.push(100);//output [ 'haider', 20, 100 ]

//pop()  delete  the  last  valuein the array(value at high index)
console.log(arr3);//output [ 'haider', 20, 100 ]

//#### unshift() used to insert value at begining 0 zero index
// shift() used to del value at begining  0 indexed ######
const newarr = [0,1,2,3,4,5]
newarr.unshift(9) //output [9,0,1,2,3,4,5]
console.log("newarr",newarr)
newarr.shift();//doesnot require value in paranthesis //ouput[0,1,2,3,4,5]

//push(x) == unshift(x) diff is of direction of input
// pop() == shift() diff is of direction

//#### includes() func to check the specific value in array 
const otherarray = [1,2,3,"laptop",4,5]
console.log("otherarray=",otherarray)
console.log(otherarray.includes(9))//return value in boolen yes or no like in string
//take input as array output as boolean
//output false

//#### output of indexed value
console.log("otherarray=",otherarray.indexOf(3))//output = 2
console.log("laptop=",otherarray.indexOf("laptop"))//output = 3
console.log("otherarray=",otherarray.indexOf(30))//output=-1

//##### convert array intp string
//join()

const coll = [1,2,3,4]
console.log("coll array=",coll.join())//output as stiring 
let NEW = coll.join()
console.log(typeof NEW)

//### slice and splice
const arr4 = [ 0,1,2,3,4,5]
console.log("A ",arr4)//A [ 0,1,2,3,4,5]

//slice
console.log("Slice ",arr4.slice(0,3))//slice returns the copy of section of array,index in the (),doesnt include 3 last num index
console.log("B ",arr4)

console.log("Splice",arr4.splice(0,3))// del the selcted range part except the end range //output [ 3,4,5]
console.log("C",arr4)
