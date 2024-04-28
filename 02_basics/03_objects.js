//singleton - if you create using constructor, it will be singleton
//Object.create one way to create object, we are not following this way

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Hiten",
    age: "18",
    location: "Earth",
    [mySym]: "MyKey1",//you need to define symbol in square bracket to declare
    email: "abc@gmail.com",
    isLoggedin: false,
    LastLoginDays: ["Monday", "Saturday"],
    "full name": "Hiten Vyas"//can not access using console.log(JsUser.email), we have to use square notationconsole.log(JsUser["email"])
}

console.log(JsUser.email)//one way to access object
console.log(JsUser["email"])//another way to access object, yo uneed to out it in "" as system is reading it as string
console.log(JsUser["full name"])

console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])


JsUser.email = "hiten@google1.com"//update email
//Object.freeze(JsUser)//can not update object
JsUser.email = "hiten@microsoft.com"//email will not be updated
console.log(JsUser)

JsUser.greeting = function(){
console.log("Hello JS User")
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`)//use backticks
    }

console.log(JsUser.greeting());

console.log(JsUser.greetingtwo());
