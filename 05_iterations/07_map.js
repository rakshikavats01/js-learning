const nums=[1,2,3,4,5,6]
const res1=nums.map((num)=>num+10)
//console.log(res1)

//maps chaining
const res2=nums
.map((num)=>num+10)
.map((num)=>num+1)
.map((num)=>num+12)
console.log(res2)