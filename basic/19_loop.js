//for loop

for (let index  = 1; index <= 10; index++) {
  const element = index;

  if (index == 8) {
    console.log("its num 8");
  }
  //console.log("value of element=", element);
}
//console.log(element); // out of local scope of loop



//_______________Nested for loop

for (let index  = 1; index <= 10; index++) {
  //console.log(`outer loop ${index}`);

  for (let j = 1; j <=10; j++) {//execute 10 times every time outer loop run

    //console.log(`inner loop ${j}`);
   // console.log(index,"*",j,"=",index*j);
    
  }
}



//_____________loop on array

let newarray=["GON","KILL","KITE","GING"]
for (let index = 0; index < newarray.length; index++) {
  //const element = newarray[index];
  console.log(newarray[index]);
  
  
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;// skips the rest of the loop body and goes to next iteration
    }
   console.log(`Value of i is ${index}`); // code after continue (this is skipped if continue is hit)
    
}