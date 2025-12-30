// // let score="100"; // string
// let score="199avs"; // string with non-numeric characters
// console.log(`Score: ${score} (Type: ${typeof score})`);

// let convertedScore=Number(score); // converting string to number
// console.log(`Converted Score: ${convertedScore} (Type: ${typeof convertedScore})`);

//"33"=> 33
//"33abc"=> NaN
//"null"=> 0
//"undefined"=> NaN
//"true"=> 1
//"false"=> 0
//"abc"=> NaN

// let isLoggedIn="true"; // string
// console.log(`Is Logged In: ${isLoggedIn} (Type: ${typeof isLoggedIn})`);

// let convertedIsLoggedIn=Boolean(isLoggedIn); // converting string to boolean
// console.log(`Converted Is Logged In: ${convertedIsLoggedIn} (Type: ${typeof convertedIsLoggedIn})`);

//"1"=> true
//"0"=> true
//"any non-empty string"=> true
//""=> false
//"null"=> false
//"undefined"=> false
//"0"=> false
//"NaN"=> false
// 1 => true
// 0 => false
// any non-zero number => true
// NaN => false

console.log("1"+ 1); // "11" string concatenation
console.log("1"- 1); // 0 number subtraction
console.log("2"* 3); // 6 number multiplication
console.log("6"/ 2); // 3 number division
console.log("5"- "2"); // 3 number subtraction
console.log("5"+"2"); // "52" string concatenation
console.log("5"* "2"); // 10 number multiplication
console.log("5"/ "2"); // 2.5 number division
console.log("5"- "two"); // NaN
console.log("hello"+ 5); // "hello5" string concatenation
console.log("hello"- 5); // NaN
console.log(true + 1); // 2 (true is converted to 1)
console.log(false + 1); // 1 (false is converted to 0)  
console.log(true + true); // 2 (both true are converted to 1)
console.log(false + false); // 0 (both false are converted to 0)
console.log(true + false); // 1 (true is 1 and false is 0)
console.log(null + 1); // 1 (null is converted to 0)
console.log(undefined + 1); // NaN (undefined is not a number)
console.log(null + null); // 0 (both null are converted to 0)
console.log(undefined + undefined); // NaN (both undefined are not numbers)
console.log(null + undefined); // NaN (undefined is not a number)   
console.log("5" * true); // 5 (true is converted to 1)
console.log("5" * false); // 0 (false is converted to 0)
console.log("5" + true); // "5true" (true is converted to "true")
console.log("5" + false); // "5false" (false is converted to "false")
console.log("5" - true); // 4 (true is converted to 1)
console.log("5" - false); // 5 (false is converted to 0)
console.log([] + []); // "" (empty string)
console.log([] + {}); // "[object Object]" (object is converted to string)
console.log({} + []); // 0 (empty array is converted to 0)
console.log({} + {}); // NaN (both objects are not numbers)
console.log([1,2] + [3,4]); // "1,23,4" (both arrays are converted to strings)
console.log([1,2] - [3,4]); // -2 (both arrays are converted to numbers: 12 - 34)
console.log([10] * 2); // 20 (array with single number is converted to that number)
console.log([10,20] * 2); // NaN (array with multiple numbers is not a number)
console.log([] * 2); // 0 (empty array is converted to 0)
console.log({} * 2); // NaN (object is not a number)
console.log(null + 0); // 0 (null is converted to 0)
console.log(undefined + 0); // NaN (undefined is not a number)
console.log("" + 0); // "0" (empty string concatenated with "0")
console.log("" - 0); // 0 (empty string is converted to 0)
console.log(" " + 0); // " 0" (string with space concatenated with "0")
console.log(" " - 0); // 0 (string with space is converted to 0)
console.log(" \t\n" - 0); // 0 (string with whitespace characters is converted to 0)
console.log(" \t\n" + 0); // " \t\n0" (string with whitespace characters concatenated with "0")
console.log("5" - null); // 5 (null is converted to 0)
console.log("5" + null); // "5null" (null is converted to "null")
console.log("5" - undefined); // NaN (undefined is not a number)
console.log("5" + undefined); // "5undefined" (undefined is converted to "undefined")
console.log(true + null); // 1 (true is 1 and null is 0)
console.log(false + null); // 0 (false is 0 and null is 0)
console.log(true + undefined); // NaN (undefined is not a number)
console.log(false + undefined); // NaN (undefined is not a number)
console.log("hello" + null); // "hellonull" (null is converted to "null")
console.log("hello" + undefined); // "helloundefined" (undefined is converted to "undefined")
console.log("hello" - null); // NaN (null is converted to 0, but "hello" is not a number)
console.log("hello" - undefined); // NaN (undefined is not a number)
console.log([] + null); // "null" (null is converted to "null")
