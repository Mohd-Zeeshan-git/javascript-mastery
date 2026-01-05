const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

coding.forEach( function(lang){
     console.log(lang);
     } ) //callback function does not have name and is called anonymous function
//here lang is parameter which takes each value of the array one by one

//using arrow function
coding.forEach( (item) => { 
    console.log(item);
 } )

 function printLang(lang){
    console.log(lang);
 }

 coding.forEach(printLang); //passing function as argument only reference is passed not the function call

 coding.forEach( (lang, index, array) => {
    console.log(`${index} : ${lang}`); //0 : JavaScript
    // console.log(array); //prints the whole array each time
 } )

//  forEach method does not return anything it returns undefined
 const result = coding.forEach( (lang) => {
    console.log(lang);
    return lang.toUpperCase(); //return value is ignored by forEach
 } )

 console.log(result); //undefined
 
// Note: forEach method executes the provided callback function once for each array element in order. 
// It does not modify the original array and does not return a new array. 
// The return value of forEach is always undefined.


// If you need to transform the array and create a new array based on the original,
// you should use the map method instead of forEach.

//array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

users.forEach( (user) => {// user is each object in the array
    console.log(`${user.name} is ${user.age} years old.`);
} )

// Modifying the original array using forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach( (num, index, arr) => {
    arr[index] = num * 2; //modifying original array
} )

console.log(numbers); // [2, 4, 6, 8, 10]

// Note: While you can modify the original array inside the forEach callback, 
// it's generally not recommended as it can lead to unexpected behavior. 
// If you need to create a new array based on transformations, consider using map instead.

// Using forEach with strings
const message = "Hello, World!";

[...message].forEach( (char) => {
    console.log(char);
} )

// Note: Strings are not arrays, but they are iterable. 
// By using the spread operator [...message], we can convert the string into an array of characters and then use forEach to iterate over each character.

// Using forEach with Maps
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

myMap.forEach( (value, key) => {
    console.log(`${key} : ${value}`);
} )

// Note: The forEach method of Map takes a callback function with two parameters: value and key. 
// It iterates over each key-value pair in the Map.

// Using forEach with Sets
const mySet = new Set([10, 20, 30, 40, 50]);

mySet.forEach( (value) => {
    console.log(value);
} )

// Note: The forEach method of Set takes a callback function with one parameter: value. 
// It iterates over each value in the Set.

// Summary: The forEach method is a powerful way to iterate over arrays, Maps, and Sets in JavaScript. 
// It allows you to execute a provided function once for each element in the collection. 
// However, it does not return a new array or modify the original array unless explicitly done so within the callback function.