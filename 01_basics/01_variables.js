const accountId=144
// const simply means immutable
let accountEmail="rvats@gmail.com"
var accountPass="r@anshu"
accountCity="Delhi"
let accountState;// right now its value is undefined
// let and var are mutable and both are way to declare let and var 

/*
Prefer not to use var
because of issue in block scope and fucntional scope
*/

//lets change
//accountId=132 not allowed as it is a const
accountEmail="x.gmail"
accountPass="123"
accountCity="Jaipur"
console.log(accountEmail);
console.table([accountEmail,accountPass,accountCity,accountState])
//for view in tabular form