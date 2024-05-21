// how to store the data inside the memory and access from the memory -Primitive and Non-Primitive

//Primitive-
//7 types-string,number,boolean,NULL,undefined,Symbol(to make some value unique),BigInt

//Reference type/Non-Primitive-In which we allocate reference inside the memory
//Array,Objects,Functions

// we didn't define the language in javascript
// so javascript is Dynamically typed language where we type-check during runtime and in statically typed we type check during compile time like c++

//there is no separate or special datype for decimal it clearely a Number

let ID1=Symbol(123)
let ID2=Symbol(123)
// console.log(ID1==ID2);
// console.log(ID1===ID2);

//array
let names=["Ram","Sham","Shanti"]

//object
let myObj={
    name:"Rakshika",
    age:21
}

//function
const myFunction=function(){
    console.log("Helloo");
}



//type(null)=object
//return type of non-primitive is object type
//function=object function
let num=123
let str="Raks"
let empty=null
let symb=Symbol(367)
let udf;
let BigNum=123456n
let bool=true
console.log(typeof(names));
//return types:---
//number=number
//string=string
//null=object
//symbol=symbol
//undefined=undefined
//bigint=bigint
//function=function
//object=object
//array=object
