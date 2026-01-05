const myNum=[1, 2, 3, 4, 5];

const result = myNum.reduce((accumulator, currentValue)=>{
     return accumulator + currentValue;
}, 0); //sum of all numbers
const result1 = myNum.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log(result); // 15

// Note: The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The original array remains unchanged.
// The reducer function takes four arguments: accumulator, currentValue, currentIndex, and array. However, the most commonly used are accumulator and currentValue.
// The initial value for the accumulator can be provided as the second argument to reduce. If not provided, the first element of the array is used as the initial accumulator value, and the iteration starts from the second element.
// It is generally used for summing values, flattening arrays, or accumulating results based on specific logic.

const product = myNum.reduce((accumulator, currentValue)=>{
    return accumulator * currentValue;
}, 1); //product of all numbers
console.log(product); // 120

//array of objects representing products with price and quantity
const products=[
    {name: "Product A", price: 10, quantity: 2},
    {name: "Product B", price: 20, quantity: 3},
    {name: "Product C", price: 15, quantity: 1},
    {name: "Product D", price: 25, quantity: 4},
];
const totalValue = products.reduce((accumulator, product)=>{
    return accumulator + (product.price * product.quantity);
}, 0); //total inventory value
console.log(totalValue); // 195

//flattening an array of arrays
const nestedArrays = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArrays.reduce((accumulator, currentArray)=>{
    return accumulator.concat(currentArray);
}, []); //flattened array
console.log(flattenedArray); // [1, 2, 3, 4, 5]

//counting occurrences of elements in an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
const fruitCount = fruits.reduce((accumulator, fruit)=>{
    if(accumulator[fruit]){ //if the fruit already exists in the accumulator object
        accumulator[fruit]++; //increment its count
    } else {
        accumulator[fruit] = 1;
    }
    return accumulator;
}, {} //initial value as an empty object of accumulator
); //object with fruit counts
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

//chaining reduce with map to get total price after discount
const totalPriceAfterDiscount = products
    .map((product)=> product.price * product.quantity) // [20, 60, 15, 100]
    .reduce((accumulator, price)=> accumulator + price, 0); // 195
console.log(totalPriceAfterDiscount); // 195    