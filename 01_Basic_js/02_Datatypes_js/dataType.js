"use strict"; // Enabling strict mode to avoid implicit globals 
//treats all js code as modern js code newer js version

// alert("Welcome to Data Types in JavaScript!"); // we are using nodejs not browser so we can not directly use alert in nodejs it is a feature of window 
const accountId = 123456; // number data type
let userName = "zeeshan"; // string data type
var isLoggedIn = false; // boolean data type
let accountBalance; // undefined data type
let accountPassword = null; // null data type
// accountBalance is declared but not initialized, so its value is undefined
// accountPassword is explicitly set to null, indicating no value
//null is an standolone value

// console.log("Account ID:", accountId, "Type:", typeof accountId);
// console.log("User Name:", userName, "Type:", typeof userName);
// console.log("Is Logged In:", isLoggedIn, "Type:", typeof isLoggedIn);
// console.log("Account Balance:", accountBalance, "Type:", typeof accountBalance);
// console.log("Account Password:", accountPassword, "Type:", typeof accountPassword);

// Using template literals to display the information
console.log(`Account ID: ${accountId} (Type: ${typeof accountId})`);
console.log(`User Name: ${userName} (Type: ${typeof userName})`);
console.log(`Is Logged In: ${isLoggedIn} (Type: ${typeof isLoggedIn})`);
console.log(`Account Balance: ${accountBalance} (Type: ${typeof accountBalance})`);
console.log(`Account Password: ${accountPassword} (Type: ${typeof accountPassword})`);//typeof null is object

// Note: In JavaScript, the type of null is actually "object". This is a known quirk of the language.

//symbol data type
const sym1 = Symbol("uniqueIdentifier");
const sym2 = Symbol("uniqueIdentifier");

// console.log("Symbol 1:", sym1, "Type:", typeof sym1);
// console.log("Symbol 2:", sym2, "Type:", typeof sym2);
// console.log("Are sym1 and sym2 equal?", sym1 === sym2); // This will be false because each symbol is unique

console.log(`Symbol 1: ${sym1.toString()} (Type: ${typeof sym1})`);
console.log(`Symbol 2: ${sym2.toString()} (Type: ${typeof sym2})`);
console.log(`Are sym1 and sym2 equal? ${sym1 === sym2}`); // This will be false because each symbol is unique

// BigInt data type
const bigIntValue = 1234567890123456789012345678901234567890n; // Note the 'n' at the end

// console.log("BigInt Value:", bigIntValue, "Type:", typeof bigIntValue);

console.log(`BigInt Value: ${bigIntValue} (Type: ${typeof bigIntValue})`);

//object data type
const user = {
  id: 1,
  name: "Zeeshan",
  isAdmin: true,
};

// console.log("User Object:", user, "Type:", typeof user);

console.log(`User Object: ${JSON.stringify(user)} (Type: ${typeof user})`);

//array data type
const numbers = [1, 2, 3, 4, 5];

// console.log("Numbers Array:", numbers, "Type:", typeof numbers);

console.log(`Numbers Array: ${numbers} (Type: ${typeof numbers})`);
