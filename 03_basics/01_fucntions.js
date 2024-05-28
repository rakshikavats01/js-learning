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
//console.log(loginInfo())

//Rest operator

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(10))

const user={
    userName:"Rakshika",
    userAge:"21"
}

function objectHandling(object){
    console.log(`Hii I am ${object.userName} and I am ${object.userAge}`)
}
//objectHandling(user)
// objectHandling({
//     userName:"Raks",
//     userAge:"20"
// })

const myArr=[10,20,30]
function arrayHandling(array){
    console.log(array[2])
}
//arrayHandling(myArr)
//arrayHandling([70,80,90])