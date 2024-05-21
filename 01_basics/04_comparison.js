// console.log(2>1)
// console.log(2==1)
// console.log(2<=1)
// console.log(2!=1)
// console.log(2<1)

//while comparison try both variable datatype should be same datatype

// console.log("2">1)
// console.log("2"<"1")
// console.log(null==0)
// console.log(null>=0)
// console.log(null>0)

//the reason is that in JS the equality check == and camparisons(<,>,<=,>=) works differntly,comparison converts null to number treating it as 0 
//thats why(3) null>=0 is true and (1)null>0 is false

// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<=0) //all false

// strict check-when we check both value and the datatype
console.log("2"==2)
console.log("2"===2)