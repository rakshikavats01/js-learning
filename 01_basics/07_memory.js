/**********Memory************************* */

//there are two types of memories that are stack and heap
//stack=primitive-copy of variable
//heap=non-primitive-refernce of original value

//primitive
let ID=12345
let new_ID=ID 
// console.log(ID)
// console.log(new_ID)

new_ID=12346
// console.log(ID)
// console.log(new_ID)
//here original value  remains same

//non-primitive
let my_info={
    name:"raks",
    ID:1
}
new_info=my_info
// console.log(my_info);
// console.log(new_info);

new_info.ID=2
// console.log(my_info);
// console.log(new_info);
// here value in original also changes 