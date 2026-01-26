function addBy5(num){
    return num+5;
}
//every thing in js can be treated as object we can use object properties in function array string etc
addBy5.power=2;
addBy5.username="zeeshan";

// console.log(addBy5(5));
// console.log(addBy5.power);
// console.log(addBy5["username"]);
// console.log(typeof addBy5.username);

// console.log(addBy5.prototype);



function createUser(username,score)
{
    this.username=username;
    this.score=score;
}

//we can define our own method through prototype

createUser.prototype.increment =function(){
    // score++ //this may become problem because it does not know if multiple times function is called whose score is needed to be chaned
    this.score++ //this will increament score of that function call which ever call called it jisne bulaya uska score increament kardo
}

createUser.prototype.printMe= function(){
    console.log(`score : ${this.score}`);//display score  of that  function call who called it
}

// const chai = createUser("chai",25);//here it will give error TypeError: Cannot read properties of undefined (reading 'printMe')
const tea= createUser("tea",250);
const chai=new createUser("chai",25)
// chai.prototype.printMe()
chai.increment();//if defined here printMe give 26 if after it give 25
chai.printMe()//js do the prototyping thing it understand 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// This --> keyword is used to fetch the current context of the object, and the
//  new --> keyword is used to call the constructor function and create the context. (It actually tells the variable that a method is present in the prototype, which is to be called.)
// prototype --> container containing the properties and methods that are common or shareable for a specific object.