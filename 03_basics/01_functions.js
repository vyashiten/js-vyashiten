// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("N");

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("N");
}

//sayMyName is Reference
//sayMyName() when you out () at the end code, it is execution

//sayMyName()

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);
// }
// addTwoNumbers(3, null)

//when function defination is created, they are called parameters
//when function is called, it is called arguments, it is called value getting passed
// addTwoNumbers(3, 5)
// const result = addTwoNumbers (3,5)
// console.log("result:", result);


/////////one way to define function and return value
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
//     }
//  const result = addTwoNumbers (3,4)
//  console.log("result:", result);


//     //addTwoNumbers(3, 4)

/////////second/another way to define function and return value, not defining extra variable let result like above, directly performing addition in return

// function addTwoNumbers(number1, number2){
//     return number1 + number2
//     }
//  const result = addTwoNumbers (3,3)
//  console.log("result:", result);
/*
function loginUserMessage(username){
    return `${username} just logged in `
}

loginUserMessage("hiten")//will not return anything, function is executed but not printing
console.log(loginUserMessage("hiten"))//hiten logged in
console.log(loginUserMessage(""))//empty user logged in
*/
///////////if else////////////
/*
function loginUserMessage(username ){//we can use this (username = "sam"){ to have sam as user, if value is null/undefined, it will throw sam just logged in as message, it its default message
    if(username === undefined){//    if(!username){ //this will also give same answer, !will give opposite to username
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage())

*/
//////////video 20//////////
//rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500, 2000))

const user ={
    username: "hiten",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

///////pass object///
handleObject({
    username:"sam",
    price:399
})

/////pass array/////
const myNewArray = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}
// console.log(returnsecondvalue(myNewArray))
console.log(returnsecondvalue([1,2,5,6,7]))



