//singleton or by using constructor

// //const appUser = new Object()
// const appUser = {}

// appUser.id="123abc"
// appUser.name="aaaabbb"
// appUser.isLoggedIn= false


//console.log(appUser);
/*
const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Hiten",
            lastname: "Hiten"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
*/
/*
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3= {obj1,obj2}
//const obj3= Object.assign({}, obj1,obj2,obj4)//since new object is returning you can use {} as target and all others will work as target
//console.log(obj3);

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);


const users ={
    if:1,
    email:"1@yahoo.com"

}
*/

////////////////////destructuring video 18//////////////////

const course = {
    coursename: "hindi",
    price:"999",
    courseInstructor: "hiten"
}
const {courseInstructor: CI} = course //you can user your own name, like changing column name in database
//console.log(courseInstructor);
console.log(CI);




// {
//     name: "Hiten",
//     coursename: "JS",
//     price: "free"
// }

//you might get api response in array like this
[
    {},
    {},
]
