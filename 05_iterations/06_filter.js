const coding_lang=["c++","python","c","HTML","CSS","C#"]

const values=coding_lang.forEach((item)=>{
    //console.log(item)
    //return item//forEach loop doesn't returns anything
})
//console.log(values)

const nums=[1,2,3,4,5,6,7]
const res1=nums.filter((num)=>num<5)
//console.log(res1)

const res2=nums.filter((num)=>{
    return num>4
})//when we create a scope with {} we have to specially return the result
//console.log(res2)

const res3=[]
nums.forEach((num)=>{
    if(num>4){
        res3.push(num)
    }
})// with forEach-some extra work
//console.log(res3)

