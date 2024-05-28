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
    console.log(a)
}
console.log(a)