const myNum=[1, 2, 3, 4, 5];

const result =myNum.map((num)=> num*2) // [2, 4, 6, 8, 10]
console.log(result); // [2, 4, 6, 8, 10]

// Note: The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The original array remains unchanged.
// The callback function should return the transformed value for each element.
// It is generally used for transforming data from one form to another.

const squaredNums= myNum.map((num)=> {
    return num**2; //squared numbers
})
console.log(squaredNums); // [1, 4, 9, 16, 25]

//chaining map with another array method filter
const doubledAndFiltered = myNum
    .map((num)=> num*2) // [2, 4, 6, 8, 10]
    .filter((num)=> num>5); // [6, 8, 10] //here num refers to the doubled values of new array
console.log(doubledAndFiltered); // [6, 8, 10]