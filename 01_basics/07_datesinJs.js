//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//Dates
//date is object in JS

let myDate = new Date()
console.log(myDate);//date is not very good readable
/*
//try to convert date to string
let myDate1 = new Date()
console.log(myDate1.toString());//date is better but still can be improved
console.log(myDate1.toDateString());//converting date to toDateString
console.log(myDate1.toLocaleString());//converting date to toLocaleString
console.log(myDate1.toTimeString());//converting date to only time

console.log(typeof myDate);//date is object in JS

*/
/*
let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023,0,23,5,3)//changing format
console.log(myCreatedDate.toDateString());//month 0 is Jan in JS,
console.log(myCreatedDate.toLocaleString());//
*/
//timestamps
/*
let myCreatedDate1 = new Date("01-14-2023")

let myTimeStamp = Date.now()
//console.log(myTimeStamp)//answer is long number which is in milliseconds
//console.log(myCreatedDate1.getTime());
console.log(Date.now()/1000);//you get decimal as well, we can use math to avoid decimals
console.log(Math.floor(Date.now()/1000));
*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

//`${ewDate.getDate()} and the time is`

newDate.toLocaleString('default', {
  weekday: "long",
})








