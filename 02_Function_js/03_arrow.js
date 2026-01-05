const user ={
    username: "arrow_user",
    price: 200,
    Message:function(){
        console.log(`${this.username},welcome to js`);// Regular function 'this' refers to the object calling the method 
        //console.log(this);// { username: 'arrow_user', price: 200, Message: [Function: Message] }//this refer to current context object 'user' block of code
        
        //this refer to current context object 'user' block of code
        // Arrow function does not have its own 'this', it uses 'this' from the surrounding context
        // In this case, 'this' refers to the 'user' object
        // If we used a regular function here, 'this' would be undefined in strict mode or refer to the global object in non-strict mode
       
        // const showDetails= () => {
        //     console.log(`Username: ${this.username}, Price: ${this.price}`);
        // }

        // return `Username: ${this.username}, Price: ${this.price}`;
    }
}
// user.Message()
// user.username="new_arrow_user"
// user.Message()
// console.log(this); // In the global scope, 'this' refers to the global object (window in browsers, global in Node.js) 
//in this case it will give empty object {} in node js
function regularFunction(){
    console.log(this); // In a regular function, 'this' refers to the global object (window in browsers, global in Node.js)
    //here it will give empty object {} in node js but it gave window object in browser
}
// regularFunction();

const arrowFunction= () => {
    console.log(this); // In an arrow function, 'this' refers to the surrounding context, which is the global scope here
    //here it will give empty object {} in node js
}
arrowFunction();
// console.log(username); // this will give error as username is not accessible outside the block scope 

function chai(){
    const username="chai_user";
    console.log(this.username); //this will give undefined as 'this' in regular function refers to global object where username is not defined
    
}
// chai();

const chail=function(){
    const username="chail_user";
    console.log(this.username); //this will give undefined as 'this' in regular function refers to global object where username is not defined 
}
// chail();

// Arrow function
// ()=> {}
const coffee= () => {
    const username="coffee_user";
    console.log(this.username); //this will give undefined as 'this' in arrow function refers to global object where username is not defined
}
// coffee();

// implicit return arrow function
const addtwo =(num1, num2) => num1 + num2;
// console.log("Sum using arrow function:", addtwo(5, 10));

// Single line arrow function with implicit return 
// parentheses are optional for single parameter 
// no need for curly braces and return keyword for implicit return
//no need for return keyword when using parentheses
const addOOne= num=>(num+1);// implicit return
// console.log("Add one using arrow function:", addOOne(9));

// Single parameter arrow function (no need for parentheses around single parameter)
const square = num => num * num;
// console.log("Square using arrow function:", square(6));

//object return in implicit return arrow function
const createUser = (username, price) => ({ username: username, price: price });// returning object literal, need to wrap in parentheses
// console.log("User object using arrow function:", createUser("arrow_obj_user", 300));

// No parameter arrow function
const greet = () => "Hello from arrow function!";
// console.log(greet());    

// Arrow function with block body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
// console.log("Division using arrow function:", divide(10, 2));
// console.log("Division by zero using arrow function:", divide(10, 0));