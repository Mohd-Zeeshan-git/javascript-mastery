const score =400;

const balance = new Number(1000); // creating a Number object new keyword is used to create object 

console.log("Score:", score, "Type:", typeof score);
console.log("Balance:", balance, "Type:", typeof balance);

// Checking if a number is integer
console.log("Is score an integer?", Number.isInteger(score));
console.log("Is balance an integer?", Number.isInteger(balance));

// Converting number to string
const scoreString = score.toString();
console.log("Score as String:", scoreString, "Type:", typeof scoreString);

// Rounding numbers
const floatNum = 4.7;
console.log("Original Float Number:", floatNum);
console.log("Rounded (Math.round):", Math.round(floatNum));
console.log("Floor (Math.floor):", Math.floor(floatNum));
console.log("Ceil (Math.ceil):", Math.ceil(floatNum));

// Generating random numbers
const randomNum = Math.random(); // between 0 and 1
console.log("Random Number (0 to 1):", randomNum);
console.log("Random Number (0 to 100):", Math.floor(randomNum * 101)); // between 0 and 100

// Finding min and max
const numbers = [10, 5, 20, 15];
console.log("Numbers:", numbers);
console.log("Minimum:", Math.min(...numbers));
console.log("Maximum:", Math.max(...numbers));

// Formatting numbers
const largeNumber = 1234567.89;
console.log("Large Number:", largeNumber);
console.log("Formatted (toFixed 2):", largeNumber.toFixed(2));
console.log("Formatted (toLocaleString):", largeNumber.toLocaleString());   
// Parsing integers and floats from strings
const intString = "42px";
const floatString = "3.14abc";
console.log("Parsed Integer from '42px':", parseInt(intString));
console.log("Parsed Float from '3.14abc':", parseFloat(floatString));   
// Checking for NaN
const invalidNumber = "hello";
const parsedNumber = Number(invalidNumber);
console.log("Parsed Number from 'hello':", parsedNumber);
console.log("Is NaN?", isNaN(parsedNumber));
console.log("Is NaN (Number.isNaN)?", Number.isNaN(parsedNumber));
// Using Math.pow and Math.sqrt
const base = 5;
const exponent = 3;
console.log(`${base} raised to the power of ${exponent} is:`, Math.pow(base, exponent));
console.log(`Square root of ${base} is:`, Math.sqrt(base));
// Using Math.abs
const negativeNum = -10;
console.log("Absolute value of -10 is:", Math.abs(negativeNum));
// Using Math.sin, Math.cos, Math.tan
const angleInDegrees = 30;
const angleInRadians = (angleInDegrees * Math.PI) / 180;
console.log(`Sine of ${angleInDegrees} degrees:`, Math.sin(angleInRadians));
console.log(`Cosine of ${angleInDegrees} degrees:`, Math.cos(angleInRadians));
console.log(`Tangent of ${angleInDegrees} degrees:`, Math.tan(angleInRadians));
// Using Math.log
const numForLog = 10;
console.log(`Natural logarithm of ${numForLog}:`, Math.log(numForLog));
console.log(`Base 10 logarithm of ${numForLog}:`, Math.log10(numForLog));
// Using Math.exp
console.log(`e raised to the power of 1:`, Math.exp(1));
console.log(`e raised to the power of 2:`, Math.exp(2));
// Using Math.trunc
const numToTrunc = 4.9;
console.log(`Truncated value of ${numToTrunc}:`, Math.trunc(numToTrunc));
// Using Math.cbrt
const numForCbrt = 27;
console.log(`Cube root of ${numForCbrt}:`, Math.cbrt(numForCbrt));  
// Using Math.sign
console.log(`Sign of 10:`, Math.sign(10));
console.log(`Sign of -10:`, Math.sign(-10));
console.log(`Sign of 0:`, Math.sign(0));
console.log(`Sign of -0:`, Math.sign(-0));
console.log(`Sign of NaN:`, Math.sign(NaN));
// Using Math.clz32
const numForClz32 = 5;
console.log(`Count of leading zero bits in 32-bit binary representation of ${numForClz32}:`, Math.clz32(numForClz32));
//percision 
const preciseNum = 0.1 + 0.2;
console.log("0.1 + 0.2 =", preciseNum);
console.log("Is 0.1 + 0.2 === 0.3?", preciseNum === 0.3);
console.log("Using toFixed(2):", preciseNum.toFixed(2));
console.log("Using toPrecision(2):", preciseNum.toPrecision(2));

