class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    // get email(){ //getter
    // }
    get password(){ //only getter will give error need to define both every prortie is assign a getter and setter at default
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}

const hcai= new User("zee@g.com","av123");
console.log(hcai.password);
