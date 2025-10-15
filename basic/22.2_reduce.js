 const myNums = [1, 2, 3]

 const myTotal = myNums.reduce(function (acc, currval) {

console.log(`acc: ${acc} and currval: ${currval}`);

return acc + currval
 }, 0);//jo ya value hogi wo bydefault accumulator ki value hogi , phir next mrtba acc+currval k output input hogi acc ki 


 console.log(` total = ${myTotal}`);

 //with arrow fx
 const arr = [ 2,3,4];
 const newtotal=arr.reduce((acc,cur) => (acc + cur),0)
 console.log(newtotal);
 

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);