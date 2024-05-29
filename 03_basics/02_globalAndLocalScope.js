//{} scope of that program
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a)//will not be availale
// console.log(b)//will not be availale
// console.log(c) //will be availale-problem with var in scope or if we didn't define var ,problem will still occur

//inside if ,for and any other loop or inside function-local scope,
//outside of anything - global scope

let a=10
if(true){
    let a=50
    //console.log(a)
}
//console.log(a)

//scope in a fucntion
function user(){
    const name="Rakshika"
    function myAge(){
        const age=10;
        console.log(name)
    }
    //console.log(age)
    //myAge()
}
user()//same scope mechanism in if-else too
if(true){
    const num1=10
    if(true){
        const num2=30
        //console.log(num1+num2)
    }
    //console.log(num2-num1)
}

/**************INTERESTING*****************/
function addOne(num1){
    return num1+1
}
console.log(addOne(7))

const addTwo=function(num){
    return num+2
}//this is known as the expression and also we can't access this before declaration
console.log(addTwo(7))