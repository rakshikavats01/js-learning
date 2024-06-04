//Nullish Coalescing operator (??):null undefined
let val1;
//val1=5 ?? 10
//val1=null ?? 10
// in case of null we just want to replace the value with second result we obtained and same as in undefined

//val1=undefined ?? 15
val1=null ?? 21 ?? 10
//console.log(val1)


/***************Terniary operator**********************/
//constion ? true:false

const price=200
price>=500 ? console.log("price is too high") : console.log("price is quite resonable")