let score="33";

// console.log(typeof score);
// console.log(typeof(score))
let valueInNumber=Number(score)
// console.log(typeof(valueInNumber))

let score1="33ab";
let valueInNumber1=Number(score1)
// console.log(typeof(valueInNumber1))
// console.log(valueInNumber1)//it will give an output NaN-Not a Number
//if a string can't be converted into a string then it will return NaN as a value

let score2=null;
let valueInNumber2=Number(score2)
// console.log(typeof(valueInNumber2))
// console.log(valueInNumber2)//it will give an output -0 and if null will be inside "null" it will return NaN

let score3=true;
let valueInNumber3=Number(score3)
// console.log(typeof(valueInNumber3))
// console.log(valueInNumber3)//it will give an output 1 and if false is there than 0

//"33"=33
//"33a"=NaN
//true=1
//false=0

let isLoggedIn=1;
let convertInBool=Boolean(isLoggedIn);
// console.log(typeof(convertInBool));
// console.log(convertInBool);

//in boolean
//1=true
//0=false
//""=false
//"raks"=true

let scores=33

let changeInString=String(scores);
// console.log(changeInString)
// console.log(typeof(changeInString))




//************** Operations******************
let value=3;
let negValue=-value;
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)
// console.log(5%3)
// console.log(12/7)

//string concatination
let s1="hii"
let s2=" rakshika"
let s3=s1+s2 
//console.log(s3)


// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+3)
// console.log(2+3+"1")
//if first item is string then every variable will be treated as string

// console.log(+true)//1
// console.log(-true)//-1
// console.log(+"")//0
// console.log(-"")//-0

let num1,num2,num3 
num1=num2=num3 =1+3
// console.log(num2)

let counter=100
counter++
//console.log(counter)
++counter 
//console.log(counter)
//link for prefix and postfix:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
