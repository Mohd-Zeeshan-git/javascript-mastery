const discriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(discriptor); //{  value: 3.141592653589793, writable: false, enumerable: false,  configurable: false }

// const chai=Object.create(null)
const  chai={
    name:"Chai",
    price:23,
    isAvailable:true,
    logMe:function(){
        console.log("code fat gaya");
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai));//undefined
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})


// for (let [key,value] of chai) { //because object is not enumurrable
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
}
}
