function addTwoNumbers(a, b) {
  
    console.log(a+b); //here function only prints the sum of two numbers not returns anything
 let sum=a+b;
 return sum; //function returns the sum of two numbers
 console.log("after return nothing executes");//this line will not be executed as it is after return statement
 
}
addTwoNumbers(5, 10);//() is used to call the function and addTwoNumbers is the function name it only reference to the function
//here function addTwoNumbers is a function declaration
    const result=addTwoNumbers(20, 30);
    console.log("Result of addTwoNumbers:", result); //undefined as function does not return anything

// Function expression
const logUser= function(username){
    if(username===undefined){
        console.log("Please provide a username");//here if no return statement is used function executes the next line of return
        return; //function returns undefined here return is used to exit from function
    }
    return `User logged in: ${username}`; //this return will not execute if username is undefined

};
console.log(logUser("john_doe"));
const userLog=logUser("alice");
console.log(userLog);

//default parameters
function multiply(a, b=2){ //b has default value 2
    return a*b;
}
console.log("Multiply with default parameter:", multiply(5)); //b will take default value 2
console.log("Multiply with both parameters:", multiply(5, 3)); //b will take value 3

// Arrow function
const divide= (a, b) => {
    return a/b;
};
console.log("Divide using arrow function:", divide(10, 2));

// Implicit return in arrow function
const square= x => x*x; //no need to use return keyword or curly braces for single expression
console.log("Square using implicit return:", square(4));

//rest parameters
function sumAll(...numbers){ //...numbers collects all arguments into an array
    return numbers; //returning the array of numbers
    // return numbers.reduce((acc, curr) => acc + curr, 0); //summing all numbers using reduce
}
console.log("Sum of all numbers using rest parameters:", sumAll(1, 2, 3, 4, 5));

// IIFE (Immediately Invoked Function Expression)
(function greet(name){
    console.log(`Hello, ${name}! This is an IIFE.`);
})("World");

// Nested function
function outerFunction(x){
    function innerFunction(y){
        return y*y;
    }
    return innerFunction(x) + 10;
}
console.log("Result of nested function:", outerFunction(5));

// Callback function
function fetchData(callback){
    setTimeout(() => {
        const data= "Sample Data";
        callback(data);
    }, 1000);
}
fetchData(function(data){
    console.log("Data received from callback:", data);
});

// Creating an object 
const object = {
    username: "johndoe",
    price: 100
}
function showObjectDetails(obj){
    return `Username: ${obj.username}, Price: ${obj.price}`;
}
console.log("Object details:", showObjectDetails(object));
showObjectDetails({username: "alice", price: 150}); //passing object literal directly

// array passed to function
const numbersArray=[1, 2, 3, 4, 5];
function calculateSum(arr){
    return arr;
    // return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of numbers array:", calculateSum(numbersArray));



function one(){
    const username="user_one";

    function two(){
        const password="pass_one";
        console.log(username);
    }
    console.log(password); //this will give error as password is not accessible here it is in function two scope

    two();
    
}
one();

if(true){
    const name="block_scope";
    if(name==="block_scope"){
        const age=25;
        console.log(`name :${name},age: ${age}`);
    }
    // console.log(age); //this will give error as age is not accessible here it is in inner if block scope
}
console.log(name); //this will give error as name is not accessible here it is in if block scope
