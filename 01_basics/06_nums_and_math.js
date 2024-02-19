/*
const score = 400
console.log(score);

const balance = new Number(100)//Number is uppercase
console.log(balance);

console.log(balance.toString());//convert number to string 
console.log(balance.toString().length);//convert number to string and you can use string properties on them
console.log(balance.toFixed(2));//decimal value

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreads = 1000000
console.log(hundreads.toLocaleString());//US style by default
console.log(hundreads.toLocaleString('en-IN'));//India style after you specify
*/

//+++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++
//math library comes with JS by default

/*
console.log(Math);//M is uppercase

console.log(Math.abs(-4));//negative sign will be removed
console.log(Math.round(4.3));//round off
console.log(Math.round(4.6));//round off

console.log(Math.ceil(4.1));//round off to ceiling
console.log(Math.floor(4.6));//round off to floor

console.log(Math.min(5,6,7,8,));//find minimum of array
console.log(Math.max(4,6,9));//find maximum of array
*/

console.log(Math.random());//value will be randomly selected between 0 and 1

console.log(Math.random()*10);//value of random could be zero, if random value is 0.1 then random will give you 1, we add 1 to it in next statement to avoid this scenario
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);//adding bracket to avoid bodmas confustion

const min=10
const max=20
console.log (Math.floor(Math.random() * (max - min + 1))+min)//formula how we want to get value between 10 and 20










