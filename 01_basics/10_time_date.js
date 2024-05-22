let curr_date=new Date()
// console.log(curr_date.toString())
// console.log(curr_date.toDateString())
// console.log(curr_date.toLocaleString())
// console.log(typeof(curr_date))

let created_date1=new Date(2022,3,25)
// console.log(created_date1.toDateString())

let created_date2=new Date("2000-04-25")
//console.log(created_date2.toDateString())

let my_time_stamp=Date.now()
//console.log(my_time_stamp)
//console.log(Math.floor(Date.now()/1000))//for value in seconds

let newDate=new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

console.log(`Today is ${newDate.getDay()} of ${newDate.getMonth()}th month`)