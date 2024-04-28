//  *****************************Conversion*************************//
/*
//first way 33
let score1 = 33 //datatype number
console.log(typeof score1);
console.log(typeof (score1));//defined as method

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);
*/

/*
//secodn way "33" string
let score = "33"//because of double quotes datatype is string
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
*/
/*
//third way "33abc"
let score2 = "33abc" //datatype number
console.log(typeof score2);
console.log(typeof (score2));//defined as method
let valueInNumber = Number(score2)
console.log(typeof valueInNumber);//33abc came in as number, it should not have been number
console.log (valueInNumber);//number came in as NaN (not a number)
*/
/*
//fourth way null
let score3 = null 
console.log(typeof score3);
console.log(typeof (score3));//defined as method

let valueInNumber = Number(score3)
console.log(typeof valueInNumber);//33abc came in as number, it should not have been number
console.log (valueInNumber);//number came in as NaN (not a number)
*/

// 33=>33
//"33"=>33
//"33abc"=>Nan
//null=>0
//undefined=>Nan
//true=1; false=0
//"hiten"=>Nan

/*
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1=>true
//0=> false
//""=> false
//"hiten" => true
*/
/*
let someNumber = 33

let stringNumber= String(someNumber)//converting in string
console.log(stringNumber);//printing 
console.log(typeof stringNumber);//checking the type of printed number 22 after converting, that is string
*/

//  ***********************************Operations*****************************//

/*
let value=3;
let negValue=-value
console.log(negValue)

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);
*/

/*
let str1="hello"
let str2=" hiten"

let str3 = str1 + str2//can't subtract, only add
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2);//1 is string 2 (number) 2(number), 122, if string is first all following values will be treated as string
console.log(1 + 2 + "2");//1(number)+2(number) and 2 is string = 32 if string is last, all value before string will work arithmatically
*/
// console.log(true);
// console.log(+true);
// //console.log(true+); will throw error
// console.log(+"");

let gameCounter = 100

++gameCounter;
gameCounter++;
console.log (gameCounter);
//study prefix postfix https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


