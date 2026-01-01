const obj=new Object();
obj.a=10;
obj.b=20;
obj.c=30;
console.log("Object created using Object constructor:", obj); 
const newObj=Object.create(obj);
console.log("New object created using Object.create():", newObj);
console.log("Accessing inherited property 'a' from newObj:", newObj.a);

const object={
    fullname:{
        username:{first:"John", last:"Doe"},
        age:25
    }
}
console.log("Accessing nested property 'first' from object:", object.fullname.username.first);


// Merging objects using Object.assign()
const target = { x: 1, y: 2 };
const source = { y: 3, z: 4 };
const mergedObj = Object.assign(target, source);
const returnedObj=Object.assign({}, target,source, {a:10, b:20});
console.log("Returned object using Object.assign():", returnedObj);
console.log("Merged object using Object.assign():", mergedObj);
const spreadedObj={...target, ...source}
console.log("Merged object using spread operator:", spreadedObj);

// Checking if an object is sealed
Object.seal(obj);
obj.a=100; // modifying existing property (will work)
obj.d=40; // adding new property (will not work)
console.log("Object after sealing attempt:", obj);
console.log("Is obj sealed?", Object.isSealed(obj));




const user= [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]
user[1].age=26; // modifying existing property (will work)
console.log(user[0].name);

const tinduser={
    name: "Diana", age: 28,
    interests: ["hiking", "reading", "traveling"],
    location: {
        city: "San Francisco",
        state: "CA"
    },
    isuserloggedIn: true,
    userProfile:["worker", "gamer", "blogger"]
}
console.log(Object.keys(tinduser)); // return an array of keys Get all keys of tinduser object
console.log(Object.values(tinduser)); //also return an array Get all values of tinduser object
console.log(Object.entries(tinduser)); // return an array of key-value pairs Get all entries of tinduser object
console.log(tinduser.hasOwnProperty('userProfile')); // Check if 'userProfile' is a property of tinduser object

//object destructuring
const {name, location:{city, state}, isuserloggedIn}=tinduser;
console.log("Destructured values:", name, city, state, isuserloggedIn);
//
const courses={
    course1:"JavaScript",
    price:100,
    course1Duration:"3 months"
}
const {course1Duration}= courses;
console.log("Destructured course1Duration:", course1Duration);
const{course1:jsCourse}=courses; //renaming while destructuring
console.log("Renamed destructured value jsCourse:", jsCourse);

