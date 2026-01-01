// Object in JavaScript can be created using object literals or the Object constructor
// Creating an object using object literal
const mySym=Symbol("id");
const person = {
  name: "Alice",
  age: 30,
  [mySym]: 12345, // using symbol as a property key
  greet: function() { // method to greet 
    console.log("Hello, my name is " + this.name);
  }
};

console.log("Person object:", person);
person.greet();
console.log(person.name);
console.log(person["name"]);
console.log(person[mySym]); // accessing symbol property

// object freeze
person.address="New York"; // adding new property
// Object.freeze(person);
person.age=35; // trying to modify existing property (will not work)
console.log("Person object after freeze attempt:", person);

console.log(person.greet(this.name));
// Creating an object using Object constructor
// whenever we define an object using new keyword it is called instance of object 
//object created using constructor is singleton 
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.getInfo = function() {
  return `${this.year} ${this.make} ${this.model}`;
};
console.log("Car object:", car);
console.log("Car info:", car.getInfo());

// Accessing and modifying object properties
console.log("Person's name:", person.name);
person.age = 31;
console.log("Updated person's age:", person.age);

// Deleting a property from an object
delete car.year;
console.log("Car object after deleting year:", car);

// Checking if a property exists in an object
console.log("Does person have 'name' property?", 'name' in person);
console.log("Does car have 'year' property?", 'year' in car);

// Iterating over object properties
console.log("Iterating over person properties:");
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}
const arrValues = Object.values(obj);
console.log("Array of values from object:", arrValues);
//object to array using entries
const arrEntries = Object.entries(obj);
console.log("Array of entries from object:", arrEntries);
// Merging two objects using Object.assign
const address = {
  street: "123 Main St",
  city: "New York"
};
const personWithAddress = Object.assign({}, person, address);
console.log("Person with address:", personWithAddress);

// Using Object.keys, Object.values, and Object.entries
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);
console.log("Keys of person object:", keys);
console.log("Values of person object:", values);
console.log("Entries of person object:", entries);

// Freezing an object to make it immutable
Object.freeze(person);
person.name = "Bob"; // This will not change the name
console.log("Person object after attempting to modify frozen object:", person);

// Checking if an object is frozen
console.log("Is person object frozen?", Object.isFrozen(person));
// Merging two objects using spread operator
const employee = {
  id: 101,
  department: "Engineering"
};
const employeeDetails = { ...person, ...employee };
console.log("Employee details:", employeeDetails);
// Creating a shallow copy of an object using spread operator
const personCopy = { ...person };
console.log("Shallow copy of person object:", personCopy);
// Modifying the copy to show it's a separate object
personCopy.name = "Charlie";
console.log("Modified copy of person object:", personCopy);
console.log("Original person object remains unchanged:", person);

