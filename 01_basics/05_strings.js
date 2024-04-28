const name = "Hiten"
const repoCount = 50

//console.log(name + repoCount + " value");//older way to concatinate 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//new modern way

const gameName = new String('Hitenhc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);//find the length 
console.log(gameName.toUpperCase());//change to upper case
console.log(gameName.charAt(3));//which charcter at position number 3

console.log(gameName.indexOf('t'));//which position

const gameNamewithdash = new String('Hiten-hc')
const newString = gameNamewithdash.substring(0, 4);//position 0 to 4, can not use negative value in substring
console.log(newString);

const anotherString = gameNamewithdash.slice(-7,2)//in slice you can give negative value
console.log(anotherString);

const newStringOne = "      Hitenwithspaces     "//trim the white spaces, also check documentation
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hiten.com/hiten%20vyas"
console.log(url.replace('%20', '-'))//replace %20 with -
console.log(url.includes('yunay'))//ask if url includes specific term


console.log(url.split('-'))


