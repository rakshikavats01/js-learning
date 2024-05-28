//const obj1=new Object();//singleton object
const obj1={}//non singleton object
obj1.name="Rakshika"
obj1.surname="vats"
obj1.age=21
obj1.ID=121
obj1.company="Ericsson"
//console.log(obj1)

//Objects depth
const user={
    name:{
        firstName:"Rakshika",
        lastName:"Vats"
    },
    ID:{
        emailId:{
            email1:"rakshik@gmail.com",
            email2:"vats@gmail.com"
        }
    }
}
//console.log(user.ID.emailId.email2)

//object assignment:-
const obj2={
    1:"a",
    2:"b"
}
const obj3={
    3:"c",
    4:"d"
}
//const obj4=Object.assign({},obj2,obj3)//without using {} in first parameter every change will reflect in obj2 as well

const obj4={...obj2,...obj3}
//console.log(obj4)

// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))
// console.log(obj4.hasOwnProperty(9))//to check that key is present or not but return always false in case of values.


//destructuring of Objects
const course={
    courseName:"Javascript",
    courseFees:1200,
    courseInstructor:"Hitesh"
}

//console.log(course.courseInstructor)
const {courseInstructor:Instructor}=course 
//console.log(Instructor);//will not work for courseInstructor
//if we dont want to write lengthy syntax again and again in our code-to make our code neat and clean



//JSON-just a object without any name and also every key and values are in string only

// {
//     "name":"Rakshika",
//     "surname":"Vats",
//     "age":"21",
//     "Company":"Ericsson",
//     "Role":"Intern-Integration engineer"
// }

//JSON formatter:tool