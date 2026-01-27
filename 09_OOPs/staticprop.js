class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username: ${this.username}`); 
    }

    static createId(){
        return `123`
    }
}

const chai=new user("zee");
console.log(chai.createId());

class Teacher extends user{
    constructor(username,password){
        super(username);
        this.password=password;
    }
}
const tea = new Teacher("iphone",234);
console.log(tea.createId());
