//for of loop 
//iterates over iterable objects (arrays, strings, maps, sets, etc.)
//["","",""]
//[{},{},{}]

// const fruits = ["apple", "banana", "cherry"];

const arr=[1,2,3,4]

for (const val of arr) {
    // console.log(val);
}

const string="hello world"  
for (const char of string) {
    // console.log(char); //h e l l o   w o r l d
}
//maps and sets are also iterable   
const map=new Map()
map.set("a",1) //set is the method 
map.set("b",2)
map.set("c",3)
map.set("b",2) //duplicate keys are not allowed

console.log(map) //Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

for (const key of map) {
    // console.log(key) //['a',1] ['b',2] ['c',3]
    
}
// below [key,value] are destructured from the array
// [] is used for array destructuring
for (const [key,value] of map) {
  console.log(`${key} : ${value}`);
}

const myObject={x:10,y:20,z:30}
for (const [key,value] of myObject) {
    // console.log(`${key} : ${value}`); //error  because myObject is not iterable
    
}
//object is not iterable directly


const set=new Set()
set.add(10)
set.add(20)
set.add(30)

for (const item of set) {
    // console.log(item);
}

const object={a:1,b:2,c:3}

// for (const element of object) {
    
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }