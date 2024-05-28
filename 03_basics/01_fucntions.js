function sayName(){
    console.log("R")
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("K")
    console.log("A")
}
//sayName()

function addTwoNum(num1,num2){
    const result=num1+num2
    return result
    console.log("Rakshika");//unreachanle code :-declared after return statement
}

//addTwoNum(3,null)//if we will not pass any number then return NaN

// prarameters:When we creates function definition
//arguments:when we pass values during calling

const result=addTwoNum(3,7)
//console.log(result);

function loginInfo(username="Raks"){
    if(username==undefined){//if(!username) also valid
        console.log("Please enter a username");
    }
    else{
    return `${username} Just logged in`
    }
}
console.log(loginInfo())