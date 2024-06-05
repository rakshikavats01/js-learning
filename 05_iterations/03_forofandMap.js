/*******************for of loop*********************/
//on array
let myArr=[1,2,3,4,5]
for (const num of myArr) {
    //console.log(num)
}

//on string 
let myStr="Hii Rakshika"
for (const char of myStr) {
    if(char==" "){
        continue
    }
    //console.log(char)
}
//objects are not iteratable through  forof loops

/***********************Maps******************************/

let country=new Map()
country.set("IN","India")
country.set("USA","United states of america")
country.set("UK","United kindom")
country.set("Fr","France")
//console.log(country)

for (const [key,value] of country) {
    //console.log(`${key}=${value}`)
}