const name = "Zeeshan Ahmed";
const greeting = 'Hello, World!';
const multiLineString = `This is a 
multi-line 
string.`;

console.log("Name:", name);
console.log("Greeting:", greeting);
console.log("Multi-line String:", multiLineString);

// String properties and methods
console.log("Length of name:", name.length);
console.log("Uppercase name:", name.toUpperCase());
console.log("Lowercase name:", name.toLowerCase());
console.log("Character at index 0:", name.charAt(0));
console.log("Index of 'Ahmed':", name.indexOf("Ahmed"));

// String concatenation
const fullGreeting = greeting + " My name is " + name + ".";
console.log("Full Greeting (concatenation):", fullGreeting);

// Using template literals for concatenation
const fullGreetingTemplate = `${greeting} My name is ${name}.`;
console.log("Full Greeting (template literal):", fullGreetingTemplate);

// String slicing
console.log("Slice (0, 7):", name.slice(0, 7));
console.log("Substring (0, 7):", name.substring(0, 7));
console.log("Substr (0, 7):", name.substr(0, 7));

// Replacing parts of a string
const newName = name.replace("Zeeshan", "Ahmed");
console.log("Replaced Name:", newName);

// Splitting a string
const nameParts = name.split(" ");
console.log("Name Parts:", nameParts);
// Trimming whitespace
const stringWithWhitespace = "   Hello, World!   ";
console.log("Trimmed String:", stringWithWhitespace.trim());
// Checking if a string includes a substring
console.log("Includes 'World':", greeting.includes("World"));
console.log("Includes 'world':", greeting.includes("world")); // case-sensitive
// Checking startsWith and endsWith
console.log("Starts with 'Hello':", greeting.startsWith("Hello"));
console.log("Ends with 'World!':", greeting.endsWith("World!"));
console.log("Starts with 'hello':", greeting.startsWith("hello")); // case-sensitive
console.log("Ends with 'world!':", greeting.endsWith("world!")); // case-sensitive
// Repeating a string
console.log("Repeated Greeting:", greeting.repeat(3));
// Converting string to array of characters
const charArray = Array.from(name);
console.log("Character Array:", charArray);
// Iterating over each character in a string
console.log("Characters in name:");
for (const char of name) {
  console.log(char);
}
// Comparing strings
const string1 = "apple";
const string2 = "banana";
console.log(`Is "${string1}" < "${string2}"?`, string1 < string2);
console.log(`Is "${string1}" > "${string2}"?`, string1 > string2);
console.log(`Is "${string1}" === "${string2}"?`, string1 === string2);
console.log(`Is "${string1}" !== "${string2}"?`, string1 !== string2);

// String padding
const paddedString = "5".padStart(3, "0");
console.log("Padded String (padStart):", paddedString);
const paddedStringEnd = "5".padEnd(3, "0");
console.log("Padded String (padEnd):", paddedStringEnd);

// Converting other data types to string
const num = 42;
const bool = true;
const nullValue = null;
const undefinedValue = undefined;
console.log("Number to String:", String(num));
console.log("Boolean to String:", String(bool));
console.log("Null to String:", String(nullValue));
console.log("Undefined to String:", String(undefinedValue));    
// Using toString() method
console.log("Number to String (toString):", num.toString());
console.log("Boolean to String (toString):", bool.toString());
// Note: null and undefined do not have toString() method
// console.log("Null to String (toString):", nullValue.toString()); // This will throw an error
// console.log("Undefined to String (toString):", undefinedValue.toString()); // This will throw an error
// Template literals with expressions
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
console.log(`The product of ${a} and ${b} is ${a * b}.`);
console.log(`The value of a squared is ${a ** 2}.`);
// Escaping characters in strings
const stringWithQuotes = "He said, \"Hello!\"";
console.log("String with Quotes:", stringWithQuotes);
const stringWithBackslash = "This is a backslash: \\";
console.log("String with Backslash:", stringWithBackslash); 
const multiLineWithEscape = "This is line 1.\nThis is line 2.\nThis is line 3.";
console.log("Multi-line with Escape Characters:\n", multiLineWithEscape);
// Raw strings using String.raw
const rawString = String.raw`C:\Development\profile\aboutme.html`;
console.log("Raw String:", rawString);
// Tagged template literals
function tag(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
  return "Tagged Template Result";
}
const taggedResult = tag`Hello, ${name}! You have ${5 + 3} new messages.`;
console.log("Tagged Template Result:", taggedResult);

// Unicode strings
const unicodeString = "Hello, \u{1F600}!"; // Grinning face emoji
console.log("Unicode String:", unicodeString);
console.log("Length of Unicode String:", unicodeString.length);
console.log("Character at index 7 (emoji):", unicodeString.charAt(7));
console.log("Code point at index 7 (emoji):", unicodeString.codePointAt(7));
// Iterating over Unicode string
console.log("Characters in Unicode String:");
for (const char of unicodeString) {
  console.log(char);
}