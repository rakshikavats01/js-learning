//elements inside an array can be of different datatypes and it is an object in Javascript 
// they are resizable 
//creates shallow copy not deep copy
//shallow copy:-A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made
const myArr1=[1,2,3,4,5]
//console.log(myArr1[3]);
myArr1.push(6)
myArr1.push(7)
myArr1.pop()
myArr1.unshift(0)//add element in front at 0th position
myArr1.shift()//remove the element from front
//console.log(myArr1)

const myArr2=new Array(7,8,9,10,11)
//console.log(myArr2);
//console.log(myArr1.length);
// console.log(myArr2.includes(1))
// console.log(myArr2.indexOf(19));//doesn't exist return -1

const myArr3=myArr2.join()
// console.log(myArr2)
// console.log(typeof myArr2)
// console.log(myArr3)
// console.log(typeof myArr3)


/*********************Slice,Splice******************/
console.log('slice operations')
//add the elements from postion i,j-1 in new array and no change in old array
console.log("Original ",myArr1);
const myArr4=myArr1.slice(1,3)
console.log("Sliced ",myArr4);
console.log("Original ",myArr1);

console.log('splice operations')
//remove the elements from postion i,j in old array and add it to new array
console.log("Original ",myArr1);
const myArr5=myArr1.splice(1,3)
console.log("Spliced ",myArr5);
console.log("Original ",myArr1);

