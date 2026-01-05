function addone(num) {
    return num + 1;
}
addone(5);


//here 
addoneNumber(10);// this works because of function hoisting 
function addoneNumber(num) {
    return num + 1;
}
// function hoisting works only with function declaration not with function expression
//function expression


// Function declaration
const addTwo= function (num){
    return num + 2;
}
addTwo(5);// this also works because function expression is defined before calling

addTwoNumbers(5) ;// this will give error because function expression is not hoisted
const addTwoNumbers= function(num){
    return num + 2;
}