//forin loop on object(specially to iterate object)
const shortcuts={
    "cpp":"C++",
    "py":"Python",
    "js":"Javascript"
}
for (const key in shortcuts) {
    //console.log(`${key} is the shortcut of ${shortcuts[key]}`)
}

//forin for array
let languages=["cpp","py","c","js","html","css"]
for (const key in languages) {
    //console.log(languages[key])
}

//note:-In for in key is the index and in forof key is the element of the array
//maps are not iteratable through forin