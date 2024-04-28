/*
primitive
7 types:

1:string

2: Number
const score = 100
const scorevalue = 100.3

3: boolean
const isLoggedIn = false

4: null -  null is not zero, null is empty
const outsideTemp = null

5: undefined - variable declared in memory space declared but we don't know the value
let userEmail;

6: symbol - to make value unique (we wrap the button (or anything) in symbole to make it unique so that can be accessed)
const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id===anotherId)

7: BigInt -  usually we cover all in number datatype but some scientific or real big values comes under BigInt
const bigNumber = 2345678909876543n put the n at the end and number will become bigint
/*


//Non primitive/reference type
Arrays
const heros = ["hero1","hero2","hero3"]

Objects are in curley braces, you can even save it in variable

let myObj=
{
    name:"hiten",
    age:11,
}
Functions

function(){} -- function defination
*/
// const myFunction = function(){
//     console.log("Hello world");
// }
// console.log(typeof myFunction);
/*
Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */


//memory type: stack and Heap
//all primitive type stack memory
//all non primitive Heap memory

let myname = "hitevyas"
let anothername= myname
anothername="mudrayunay"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "userone@google.com",
    empid:"123@123"
}
let userTwo = userOne

userTwo.email="usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);