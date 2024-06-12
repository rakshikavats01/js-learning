//method for creating function in arguments only
const coding_lang=["c++","python","c","HTML","CSS","C#"]
//coding_lang.forEach(function(item){console.log(item)})

//creating separate function
function language(item){
    console.log(item)
}

//coding_lang.forEach(language)
//we have to just give reference of the fucntion not executing it

//with arrow fucntion
coding_lang.forEach( (item,index,arr)=>{
    //console.log(item,index,arr)
})//we can print index and array as well in forEach by giving them in parameters

//with array of objects
const shortcut_language=[
    {
        language:"Python",
        filename:"py"
    },
    {
        language:"C++",
        filename:"cpp"
    },
    {
        language:"Javascript",
        filename:"js"
    }

]
shortcut_language.forEach((item)=>{
    console.log(`${item.language} shortcut is ${item.filename}`)
})