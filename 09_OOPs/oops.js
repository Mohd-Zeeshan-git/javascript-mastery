const user ={
    username:"zee",
    loginCount:9,
    signedIn:true,
    getAllUser:function(){
        console.log("user all");
        console.log(this.username); //execution context this define current context because username is not defined 
        console.log(this); //  {  username: 'zee',   loginCount: 9,   signedIn: true,  getAllUser: [Function: getAllUser] }
        
        
    }
}
// console.log(user.getAllUser());//need to run because no reference passed    user all   undefined


function user2(username,isLoggedIn,signedIn){

    // myusername=username;
    this.username=username;//it return object here this is global context we store values to this 
    this.isLoggedIn= isLoggedIn;
    this.signedIn=signedIn;


    return this;
}

// const userOne= user2("zee",true,1);
// console.log(userOne);
// const userTwo = user2("thi",false,3)// it will create problem because it will change the userOne value which is not expected
const userOne=new user2("zee",false,2);
const userTwo= new user2("this",true,3); //here we are creating instace means copy of that function
console.log(userOne);
console.log(userTwo);
//when you write new keyword an empty object is created which is called as instance 
//because of using new keyword a constructor function is called 
//all arguments are injected in this keyword


