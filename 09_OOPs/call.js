function setUsername(username){
    this.username=username
    console.log("called");
    
}

function createUser(username,password){
    // setUsername(username);// it is called but everything vanish so username is not assigned 
    // setUsername.call(username);//it give reference of the function  it still does not cahnge username because it uses this of setusername context which will vanish
    setUsername.call(this,username)//here we are telling it to use my current context this instead of your
    this.password=password;
}

const chai= new createUser("zee",2);
console.log(chai);