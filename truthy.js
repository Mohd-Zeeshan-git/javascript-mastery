// falsy values in JavaScript are: false, 0, -0, bigInt 0n, "", null, undefined, and NaN.

// truthy values are all values that are not falsy. This includes: true, any non-zero number (positive or negative), any non-empty string, any object (including empty objects {} and arrays []), and any BigInt other than 0n.
// "0", "false", [], {}, function() {}, etc are all truthy values.

const arraysOfValues = [];
if(arraysOfValues.length===0){
    console.log("Array is empty");
}

const objectsOfValues = {};
if(Object.keys(objectsOfValues).length===0){
    console.log("Object is empty");
}   
// Example of truthy and falsy checks
const valuesToCheck = [false, 0, -0, 0n, "", null, undefined, NaN, true, 42, "Hello", {}, [], function() {}];

valuesToCheck.forEach(value => {
    if (value) {
        console.log(`${JSON.stringify(value)} is truthy`);
    } else {
        console.log(`${JSON.stringify(value)} is falsy`);
    }
});

// Function to check if a value is truthy or falsy
function checkTruthiness(value) {
    return value ? "truthy" : "falsy";
}

// Testing the function
console.log(checkTruthiness(false));      // falsy
console.log(checkTruthiness(0));          // falsy
console.log(checkTruthiness(""));         // falsy
console.log(checkTruthiness(null));       // falsy
console.log(checkTruthiness(undefined));  // falsy
console.log(checkTruthiness(NaN));        // falsy
console.log(checkTruthiness(true));       // truthy
console.log(checkTruthiness(42));         // truthy
console.log(checkTruthiness("Hello"));    // truthy
console.log(checkTruthiness({}));         // truthy
console.log(checkTruthiness([]));         // truthy
console.log(checkTruthiness(function() {})); // truthy

// Note: In JavaScript, the concept of truthy and falsy is often used in conditional statements to determine the flow of execution based on the "truthiness" of a value.

//Nullish Coalescing Operator (??) Example null and undefined are nullish values
let userInput = null;
let defaultValue = "Default Value";

let finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "Default Value"

userInput = "User Provided Value";
finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "User Provided Value"

//ternary operator
// (condition) ? expressionIfTrue : expressionIfFalse
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: "Yes, can vote"