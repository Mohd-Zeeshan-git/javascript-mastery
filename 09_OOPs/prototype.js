const name="zeeshan    ";
// console.log(name.length);
// console.log(name.trim().length);
// console.log(name.trueLength());

const myHeros=["hulk","thor"];

let heroPower={
    thor:"hammer",
    hulk:"green",
    getSpiderPower:function(){
        console.log(`spider power is ${this.hulk}`);    
    }
}

//if i make an method of prototype of object it can be inherited to all other function arrays and string
// Object//i can access object though this
Object.prototype.Zee=function(){
    console.log(`zeesahn is present in all object`);
}

heroPower.Zee(); //it is accessble
myHeros.Zee();

Array.prototype.heyZee=function(){
    console.log("hey");
}

myHeros.heyZee();//this will work
// heroPower.heyZee()//this will give error because parent does not inherit properties of child

//inheritance
//how to access the properties of another object 
const teacher={ishired:true};
const TA={isAvailable:false};
const TAsuport={fulltime:true,
    assignment:"js",

    __proto__ :TA//it assign the TA object to thw prototype
}
const user={username:"zeeshan"}

teacher.__proto__=user;


//modern syntax
Object.setPrototypeOf(TA,teacher)


let anotherUserName="chaiaurcode     ";
String.prototype.trueLength=function(){
    console.log(this);
    console.log(`true length is :${this.trim().length}`);    
}
anotherUserName.trueLength()
"zeeshan".trueLength()