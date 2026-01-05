const myNum=[1, 2, 3, 4, 5];

// myNum.filter((num)=>{
//   num>4 
// //   console.log(num); //1 2 3 4 5 why not 5 only because filter expects a boolean return value to determine if the element should be included in the new array
// })

const result = myNum.filter((num)=> num>2) // [3, 4, 5]
console.log(result); // [3, 4, 5]

// Note: The filter method creates a new array with all elements that pass the test implemented by the provided function. 
// The original array remains unchanged.
// The callback function should return a boolean value (true or false) to indicate whether each element should be included in the new array.
// If no elements pass the test, an empty array is returned.
// It is generally used for filtering elements based on specific criteria.

const newNums= myNum.filter((num)=> {
    return num%2===0; //even numbers
})
console.log(newNums); // [2, 4]

const mynum =[]
myNum.forEach((num)=>{
    if(num>2){
        mynum.push(num)
    }
})
console.log(mynum); // [3, 4, 5]

//array of books  objects with five to six properties
const books=[
    {title: "Book One", author: "Author A", year: 2001, rating: 4.5},
    {title: "Book Two", author: "Author B", year: 1999, rating: 3.8},
    {title: "Book Three", author: "Author C", year: 2010, rating: 4.9},
    {title: "Book Four", author: "Author D", year: 2005, rating: 2.5},
   {title: "Book Five", author: "Author E", year: 2018, rating: 4.2},
   {title: "Book Six", author: "Author F", year: 2020, rating: 4.7},
];
const highRatedBooks = books.filter((book)=> book.rating >=4.0);
console.log(highRatedBooks);
