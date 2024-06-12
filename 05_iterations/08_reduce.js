const nums=[1,2,3]
// const result=nums.reduce(function (acc,curVal){
//     console.log(`Accumulator:${acc} and Curr_Val:${curVal}`)
//     return acc+curVal
// },2)
// console.log(result)

const result=nums.reduce((acc,curr)=>acc+curr ,0)
console.log(result)

//with objects
const course=[
    {
        name:"python",
        price:1000
    },
    {
        name:"C++",
        price:500
    },
    {
        name:"javascipt",
        price:1500
    }

]
const cart_value=course.reduce((acc,item)=>acc+item.price,0)
console.log(cart_value)