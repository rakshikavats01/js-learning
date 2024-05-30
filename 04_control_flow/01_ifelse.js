//If-Else
const isLoggedIn=false
if(isLoggedIn){
    //console.log("User is logged in");
}else{
    //console.log("User not logged in");
}
//Comparison operators:-
//< , > , <= , >= , == , != , ===(strict equal:-type checking)

if(true){
    const num1=1
    var num2=2
    //console.log(num1)
}
//console.log(num1)//it will raise an error
//console.log(num2)//but this will not raise an error because num2 is a global scope variable

let balance=1
if(balance>10) console.log("You are above average"),
console.log(balance)//this is implicit scope of if else but dont do this for multiple lines

//If-Else If
// balance=175
// if(balance<500){
//     console.log("You can't withdraw cash")
// }else if(balance<1000){
//     console.log("You can withdraw cash")
// }else{
//     console.log("You have to much money")
// }

//And and Or
const userLoggedIn=true
const userCart=true
const userViaGoogle=true
const userViaEmail=false 
// if(userLoggedIn && userCart){
//     console.log("You can purchase it");
// }
// else{
//     console.log("You can't purchase it");
// }
// if(userViaEmail || userViaGoogle){
//     console.log("Came from other platform");
// }