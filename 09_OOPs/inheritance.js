class user{
    constructor(username){
        this.username=username;
    }

    printMe(){
        console.log(`username: ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,password){
        //we can use call method 
        super(username) //it will do the  call part of its parent class 
        this.password=password;
    }
    addcourse(){
        console.log(`couse addes by : ${this.username}`);
        
    }
}

const chai =new Teacher("cahi",2);
chai.addcourse();
chai.printMe();

const tea= new user("zee");
// tea.addcourse()//give error
tea.printMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof user);

