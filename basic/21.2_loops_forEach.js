// for each function of array

const languages = ["CPP","JS","python","html","rust","swift"]
// declares a callback function(fx without name )

languages.forEach( function(item){
    //console.log(item);
    
})

//variatoin 2 with arrow fx(no function keyword and name just =>)
languages.forEach( (item)=>{
    //console.log(item);
    
})

//variation 3 declare fx then use it

function display (item){
console.log(item);
}

languages.forEach(display)

// paramerters
languages.forEach( (item, index, array)=>{
    console.log(item,index,array);
    })

//json format
const arr = [
    { lang : "C++",  file :"cpp"},
    { lang : "python",  file :"py"},
    { lang : "javascript++",  file :"js"}
]
arr.forEach((value)=>
{
    console.log(value.file);
    
})
// useful when retriveing the keys or values of objects while using database