let name="Rakshika is "
let age=20
//concatination
// console.log(name+age+" years old");

//string interpolation:-modern and clean way to write our code
// console.log(`Rakshika is ${age} years old`);

const gameName=new String("raksgame")
// console.log(gameName[2]);
// console.log(typeof(gameName));
//console.log(gameName.indexOf("z"));//if not present returns -1
//console.log(gameName.charAt(1));
const newStr1=gameName.substring(0,4)
// console.log(newStr1);
const newStr2=gameName.slice(-7,4)
// console.log(newStr2)

const sampleString="  Hiii  "
// console.log(sampleString)
// console.log(sampleString.trim());
// console.log(sampleString.trimStart());
// console.log(sampleString.trimEnd());

const url="www.httpsrakshika%20vats.com"
//console.log(url.replace("%20","-"));
//console.log(url.includes("rakshika"));

const sample2="hii Rakshika Vats How are you"
console.log(sample2.split(" "));