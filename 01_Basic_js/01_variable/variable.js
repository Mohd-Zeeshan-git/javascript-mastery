const accountId = 123456;
let userName = "zeeshan";
var accountPassword = "123";
accountCity="karachi";

// accountId = 654321; // This will cause an error because accountId is a constant

userName = "ahmed"; // This is valid because userName is declared with let
accountPassword = "456"; // This is valid because accountPassword is declared with var
accountCity = "lahore"; // This is valid but not recommended as accountCity is implicitly global

// console.log("Account ID:", accountId);
// console.log("User Name:", userName);
// console.log("Account Password:", accountPassword);
// // console.log("Account City:", accountCity);

// prefer not use var because issue in scope

console.table([accountId, userName, accountPassword, accountCity]);