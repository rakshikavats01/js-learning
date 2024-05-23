//singleton:-when we created the object from a constructor,when we declared with litrals then it will be not singleton
//Object.create()-from constructor
const mySym=Symbol("key1")
const obj1={
    name:"Rakshika",//here name treated as string i.e. "name"
    age:21,
    [mySym]:"myKey1",//if we use bracket than it will treat as symbol
    curr_location:"Noida"
}
// console.log(obj1.name)
// console.log(obj1["name"])
//console.log(obj1[mySym])

// changes
obj1["age"]=22
//console.log(obj1);

//if we don't want to do any changes we can use freeze
//Object.freeze(obj1)
obj1["age"]=21
//console.log(obj1);//there will be no change in age

obj1.greetings=function(){
    console.log(`Hello ${this.name}`);
}//this we use to refer same object

//console.log(obj1.greetings)//the output is function  anonymous
console.log(obj1.greetings())