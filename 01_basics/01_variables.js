const accountId = 144553
let accountEmail = "hhhh@google.com"
var accountPassword = "12345"
accountCity = "Dayton"

// accountId = 2 //not allowed

accountEmail = "hv@hv.com"
accountPassword = "2121211"
accountCity = "Cincinnati"//possible to use memory space of variable without declaring variable
let accountState;

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])