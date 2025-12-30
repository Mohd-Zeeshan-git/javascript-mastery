console.log("2">1); // true
console.log("2">="2"); // true
console.log("2"=="2"); // true
console.log("2"==="2"); // true
console.log("2"!="2"); // false
console.log("2"!=="2"); // false

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null == 0); // false
console.log(null === 0); // false

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined == 0); // false
console.log(undefined === 0); // false


console.log(2>"1"); // true
console.log(2<"1"); // false
console.log(2>="2"); // true
console.log(2<="2"); // true
console.log(2=="2"); // true
console.log(2==="2"); // false
console.log(2!="2"); // false
console.log(2!=="2"); // true

console.log(0==false); // true
console.log(0===false); // false
console.log(1==true); // true
console.log(1===true); // false

console.log(null==undefined); // true
console.log(null===undefined); // false

console.log("5">3); // true
console.log("5"<3); // false
console.log("5">="5"); // true
console.log("5"<="5"); // true
console.log("5"=="5"); // true
console.log("5"==="5"); // true
console.log("5"!="5"); // false
console.log("5"!=="5"); // false

console.log("5">"3"); // true
console.log("5"<"3"); // false
console.log("5">="5"); // true
console.log("5"<="5"); // true
console.log("5"=="5"); // true
console.log("5"==="5"); // true
console.log("5"!="5"); // false
console.log("5"!=="5"); // false

console.log("apple">"banana"); // false
console.log("apple"<"banana"); // true
console.log("apple">="apple"); // true
console.log("apple"<="apple"); // true
console.log("apple"=="apple"); // true
console.log("apple"==="apple"); // true
console.log("apple"!="apple"); // false
console.log("apple"!=="apple"); // false


 //stack(primitive) vs heap(object) memory comparison
let a = 10; // primitive data type stored in stack
let b = a; // b gets a copy of the value of a

console.log("Before changing a:");
console.log("a:", a); // 10
console.log("b:", b); // 10

a = 20; // changing a does not affect b

console.log("After changing a:");
console.log("a:", a); // 20
console.log("b:", b); // 10

// Now with objects
let obj1 = { value: 10 }; // object stored in heap
let obj2 = obj1; // obj2 references the same object as obj1

console.log("Before changing obj1:");
console.log("obj1.value:", obj1.value); // 10
console.log("obj2.value:", obj2.value); // 10

obj1.value = 20; // changing the property of the object

console.log("After changing obj1:");
console.log("obj1.value:", obj1.value); // 20
console.log("obj2.value:", obj2.value); // 20 (obj2 reflects the change because it references the same object)