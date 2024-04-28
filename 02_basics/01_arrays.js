//array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*
const myArray = [1,2,3,4,5] //array are in square brackets, array has element, it could be different types like string, number etc
console.log(myArray[0]);

const myHeros = ["Hero1","Hero2","Hero3"]
console.log(myHeros[1]);

const myArray2 = [5,6,7,8,9]
console.log(myArray2[3]);
*/

//Array methods
/*
const myArray = [1,2,3,4,5]
myArray.push(6)
console.log(myArray)
myArray.push(7)
 console.log(myArray)
 myArray.pop()//pop the last value
 console.log(myArray)

myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)
*/

/*
const myArray = [1,2,3,4,5]
console.log(myArray.includes(9));
console.log(myArray.includes(1));
console.log(myArray.indexOf(5));//number 5 is at index value of 4

const newArray = myArray.join()
console.log(newArray)//
console.log(typeof newArray)// join convert it to string and remove square brackets
*/

//slice, splice
const myArray = [0,1,2,3,4,5]

console.log ("A ", myArray)

 const yourArray = myArray.slice(1,3)
 console.log (yourArray)
 console.log("B", myArray)

 const ourArray= myArray.splice(1,3)
 console.log("C",myArray)//check what is in array
 console.log(ourArray)
