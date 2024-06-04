//for
for (let index = 0; index < 5; index++) {
    //console.log(index);
}
//console.log(index)

//if-else inside the loops
for (let i = 0; i <=10; i++) {
    if(i%2==0){
        //console.log(i)
    }
}

//for loop inside for loop
for (let i = 1; i<=10; i++) {
    //console.log(`Table of ${i}`)
    for (let j = 1; j <=10; j++) {
        //console.log(`${i}*${j}=${i*j}`)
    }
}

//for loop with array
let student=["ram","shyam","rom","som","raju"]
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    //console.log(element)
}

/*********************break and continue********************/
for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("5 detected")
        continue
    }
    if(i==9){
        console.log("Above limit")
        break
    }
    console.log(`value:${i}`)
}