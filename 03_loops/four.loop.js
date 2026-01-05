const myObject={
    js:"JavaScript",
    py:"Python",
    rb:"Ruby",
    java:"Java"
}

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];
    
// }

for (const key in myObject) {
    console.log(key); //js py rb java
    console.log(myObject[key]); //JavaScript Python Ruby Java
}

const array=["apple","banana","cherry"]

for (const index in array) {
    console.log(index); //0 1 2
    console.log(array[index]); //apple banana cherry
}

//Note: for...in loop iterates over enumerable properties (keys) of an object or indices of an array. 
//It is generally used for objects. When used with arrays, it iterates over the indices as strings.

//However, for...of loop (introduced in ES6) iterates over the values of an iterable object (like arrays, strings, maps, sets, etc.). 
//It is generally used for arrays and other iterable objects.

const map=new Map()
map.set("a",1) //set is the method 
map.set("b",2)
map.set("c",3)
map.set("b",2) //duplicate keys are not allowed

for (const key in map) {
    // console.log(key); //does not work because map is not an object
    //maps are not enumerable properties
    //maps are not iterable 
    //enumerable means 
}