class user{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    encrytPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toLowerCase()}`
    }
}

const chai = new user("Zee",2344);
console.log(chai.encrytPassword());
console.log(chai.changeUsername());

//behind the scene
function user1 (username,password){
     this.username=username;
        this.password=password;
}

user1.prototype.changeUsername=function(){
        return `${this.username.toLowerCase()}`
    }
user1.prototype. encrytPassword=function(){
        return `${this.password}abc`
    }
const tea =new user1("ZEE",344);
console.log(tea.changeUsername());
console.log(tea.encrytPassword());

