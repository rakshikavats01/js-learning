const user={
    username:"Rakshika Vats",
    greetings:function(){
        console.log(`Heyyy ${this.username}`)
        console.log(this);
    }
}
//user.greetings()
// user.username="Rakss"
// user.greetings()
//console.log(this);//in node environment refering to an empty object 
function userInfo(){
    username="Rakshika Vats"
    console.log(this.username)
}
//userInfo()
const ageInfo=()=>{//arrow function
    age=21;
    console.log(this.age)// in arrow function it will return undefined
}
//ageInfo()

/********************Arrow Fucntion*************************/
const num3=(num1,num2)=>{
    return num1+num2
}
//console.log(num3(1,2));

//implicit return
const addTwo=(num1,num2)=> num1+num2 // no curly braces and no return 
//if we use return meane explicitly return
//console.log(addTwo(1,2));

const object=()=>({name:"Rakshika"})// we have to tie up the objects in parenthesis to return them otherwise it will return undefined
console.log(object())