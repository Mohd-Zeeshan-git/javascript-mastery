const fruits = ["apple", "banana", "orange"];
// console.log("Fruits array:", fruits);
// console.log("First fruit:", fruits[0]);
// console.log("Last fruit:", fruits[fruits.length - 1]);
// console.log("Number of fruits:", fruits.length);

// // Adding an element to the end of the array
// fruits.push("grape");
// console.log("After push:", fruits);

// // Removing the last element from the array
// const lastFruit = fruits.pop();
// console.log("Popped fruit:", lastFruit);
// console.log("After pop:", fruits);

// // Adding an element to the beginning of the array
// fruits.unshift("mango");
// console.log("After unshift:", fruits);

// // Removing the first element from the array
// const firstFruit = fruits.shift();
// console.log("Shifted fruit:", firstFruit);
// console.log("After shift:", fruits);

//concat push  an array in another array
const tropicalFruits = ["pineapple", "papaya"];
const allFruits = fruits.concat(tropicalFruits);


console.log("All fruits after concat:", allFruits);

//using push  
fruits.push(tropicalFruits);
console.log("Fruits after pushing tropical fruits:", fruits);
//using push with spread operator
fruits.push(...tropicalFruits);
console.log("Fruits after pushing tropical fruits using spread operator:", fruits);



// Using spread operator to combine arrays
const moreFruits = ["kiwi", "melon"];
const combinedFruits = [...fruits, ...moreFruits];
console.log("Combined fruits using spread operator:", combinedFruits);  

//flat array
const nestedFruits = ["apple", ["banana", "orange"], "grape", ["mango", "papaya"]];
const flatFruits = nestedFruits.flat();
console.log("Flat fruits array:", flatFruits);
// in depth flattening
const deeplyNestedFruits = ["apple", ["banana", ["orange", "grape"]], "mango", ["papaya", ["kiwi"]]];
const deeplyFlatFruits = deeplyNestedFruits.flat(2);
console.log("Deeply flat fruits array:", deeplyFlatFruits);

// // Finding the index of an element
// const indexOfBanana = fruits.indexOf("banana");
// console.log("Index of banana:", indexOfBanana);

// // Checking if an element exists in the array
// const hasOrange = fruits.includes("orange");
// console.log("Contains orange?", hasOrange);

// // Iterating over the array
// console.log("Fruits in the array:");
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

// // Creating a new array using map
// const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log("Uppercase fruits:", upperCaseFruits);

// // Filtering the array
// const fruitsWithA = fruits.filter(fruit => fruit.includes("a"));
// console.log("Fruits containing 'a':", fruitsWithA);

// // Joining array elements into a string
// const fruitString = fruits.join(", ");
// console.log("Fruits as a string:", fruitString);

// // Splitting a string into an array
// const colorsString = "red,green,blue,yellow";
// const colorsArray = colorsString.split(",");
// console.log("Colors array:", colorsArray);

// // Sorting the array
// fruits.sort();
// console.log("Sorted fruits:", fruits);

// // Reversing the array
// fruits.reverse();
// console.log("Reversed fruits:", fruits);

// // Slicing the array
// const someFruits = fruits.slice(1, 3);
// console.log("Sliced fruits (index 1 to 3):", someFruits);

// // Finding the length of the array
// console.log("Length of fruits array:", fruits.length);  
// // Note: Arrays in JavaScript are dynamic and can hold elements of different data types.
// console.log("Length of fruits array:", fruits.length);
// //slice and splice
// const numbers = [10, 20, 30, 40, 50, 60];
// console.log("Original numbers array:", numbers);

// // Using slice to create a new array
// const slicedNumbers = numbers.slice(2, 5); // from index 2 to 4
// console.log("Sliced numbers (index 2 to 5):", slicedNumbers);
// console.log("Numbers array after slice (unchanged):", numbers);

// // Using splice to modify the original array
// const splicedNumbers = numbers.splice(2, 3, 25, 35); // remove 3 elements from index 2 and add 25, 35
// console.log("Spliced numbers (removed):", splicedNumbers);
// console.log("Numbers array after splice (modified):", numbers);
// // Finding index using findIndex
// const index = numbers.findIndex(num => num > 30);
// console.log("Index of first number greater than 30:", index);

// // Finding element using find
// const foundNumber = numbers.find(num => num > 30);
// console.log("First number greater than 30:", foundNumber);

// // Reducing the array to a single value
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log("Sum of numbers array:", sum);

// // Checking if every element meets a condition
// const allGreaterThan10 = numbers.every(num => num > 10);
// console.log("Are all numbers greater than 10?", allGreaterThan10);

// // Checking if some elements meet a condition
// const someGreaterThan50 = numbers.some(num => num > 50);
// console.log("Is there any number greater than 50?", someGreaterThan50);
// // Flattening a nested array
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = nestedArray.flat(2); // flattening 2 levels deep
// console.log("Flattened array:", flattenedArray);

// // Creating an array from a string
// const str = "hello";
// const charArray = Array.from(str);
// console.log("Array from string 'hello':", charArray);

// // Filling an array with a static value
// const filledArray = new Array(5).fill(0);
// console.log("Filled array with 0s:", filledArray);

// // Creating an array using Array.of
// const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
// console.log("Array created using Array.of:", arrayOfNumbers);   
// // Creating an array using Array.from
// const arrayFromString = Array.from("JavaScript");
// console.log("Array created using Array.from from string:", arrayFromString);
// // Creating an array using Array constructor
// const arrayWithLength = new Array(3); // creates an array with 3 empty slots
// console.log("Array created using Array constructor with length 3:", arrayWithLength);
// const arrayWithElements = new Array(1, 2, 3); // creates an array with elements 1, 2, 3
// console.log("Array created using Array constructor with elements:", arrayWithElements);
// // Using flatMap to map and flatten an array
// const words = ["hello", "world"];
// const letters = words.flatMap(word => word.split(""));
// console.log("Letters from words using flatMap:", letters);
// // Using Array.isArray to check if a variable is an array
// const testArray = [1, 2, 3];
// const testObject = { a: 1, b: 2 };
// console.log("Is testArray an array?", Array.isArray(testArray));
// console.log("Is testObject an array?", Array.isArray(testObject));
// // Using Array.prototype.copyWithin to copy part of an array
// const copyArray = [1, 2, 3, 4, 5];
// copyArray.copyWithin(0, 3); // copy elements from index 3 to the start
// console.log("Array after copyWithin:", copyArray);
// // Using Array.prototype.entries to get an iterator of key/value pairs
// const entriesArray = ["a", "b", "c"];
// const iterator = entriesArray.entries();
// console.log("Entries in the array:");
// for (const [index, value] of iterator) {
//   console.log(index, value);
// }
// // Using Array.prototype.keys to get an iterator of keys
// const keysIterator = entriesArray.keys();
// console.log("Keys in the array:");
// for (const key of keysIterator) {
//   console.log(key);
// }   

//isArray example
console.log("Is fruits an array?", Array.isArray(fruits));
console.log("Is 'hello' an array?", Array.isArray("hello"));
console.log("All fruits after concat:", allFruits);
//from object to array
const obj = {0: 'a', 1: 'b', 2: 'c', length: 3};
const arrFromObj = Array.from(obj);
console.log("Array from object:", arrFromObj);
//object to array using keys
const arrKeys = Object.keys(obj);
console.log("Array of keys from object:", arrKeys);
//object to array using values
const arrValues = Object.values(obj);
console.log("Array of values from object:", arrValues);
//object to array using entries
const arrEntries = Object.entries(obj);
console.log("Array of entries from object:", arrEntries);
