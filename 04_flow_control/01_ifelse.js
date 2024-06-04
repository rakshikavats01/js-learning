//If-else
// if(2=="2"){
//     console.log("Equal")
// }
// if(2==="2"){
//     console.log("Equal");
// }else{
//     console.log("Not Equal")
// }

//comaprison operator
//< , > , <= , >= , == , ===(datatype check as well) , !=

//scope in If-else

const num1=10
if(true){
    const num2=20// if we use const or let than it can't be used outside if loop but if we use var or donot define anything then it can be used outside the loop as well
    //console.log(num1+num2)
}
//console.log(num1+num2)

const balance=500
if(balance>500) //console.log("You have enough money")

if(balance>500){
    //console.log("You have enough money");
}else if(balance==500){
    //console.log("You have exact amount")
}else{
    //console.log("You are kangal")
}

const userloggedIn=true 
const debitCard=true
const GoogleAccount=true
const email=false 
if(userloggedIn && debitCard){
    console.log("Logged in and have card");
}else if (GoogleAccount || email){
    console.log("Account created");
}