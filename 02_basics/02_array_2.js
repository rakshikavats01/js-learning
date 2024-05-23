const arr1=[1,2,3,4]
const arr2=[5,6,7]
arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[4][1]);
arr1.pop()
// console.log(arr1);
// console.log(arr2);
//concat creates new array
const arr3=arr1.concat(arr2)
//console.log(arr3[4]);

//spread operator
const arr4=[...arr1,...arr2]
//console.log(arr4);

//flat-flatter the depth inside the array
const arr5=[1,2,3,[4,5,6],7,[8,[9,10,[11]]]]
const arr6=arr5.flat(2)
const arr7=arr5.flat(Infinity)
// console.log(arr6)
// console.log(arr7)

//of,from,isArray
console.log(Array.isArray("rakshika"))
console.log(Array.from("rakshika"))//creates an array of each element of input
console.log(Array.of("rakshika","vats"))//creates an new array of multiple inputs
console.log(Array.from({ID:1}))//Special case for interview