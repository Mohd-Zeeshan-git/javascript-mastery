// iffy function expression
(function() {
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();
//if we dont use ; then it may recognize next line starting with ( or / or + or - as part of previous line code
// IIFE with arrow function syntax
(() => {
    console.log("This is an IIFE using arrow function syntax");
})();

//named IIFE
(function namedIIFE() {
    console.log("This is a named IIFE");
})();


// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}! This is an IIFE with a parameter.`);
})("JavaScript");

// IIFE that returns a value
const result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(`The result of the IIFE is: ${result}`);

// console.log("Division using arrow function:", divide(10, 2));    


// Note: IIFE functions do not have their own 'this' context; 'this' refers to the global object in non-strict mode or undefined in strict mode.
//in iife function if we dont end with () it will not invoke the function immediately
//in iifi function if we dont use ; at the end it may create issue if we write next line starting with ( or / or + or -
//because js engine may think its part of previous line code
// Example:
let x = 10
// (function() { console.log("This may cause an issue without semicolon"); })();
// To avoid this issue, always use semicolon at the end of previous line
; (function() { console.log("This is safe with semicolon"); })();

// IIFE with strict mode
// (function() {
//     'use strict';
//     console.log("This IIFE is running in strict mode");
// })();

// // IIFE to create a private scope
// const counter = (function() {
//     let count = 0; // private variable

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// })();