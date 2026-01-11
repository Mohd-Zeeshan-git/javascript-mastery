// const promiseOne= new Promise(function(resolve,reject){  //it takes a callback function and function takes two params resove and reject

//     //Do an async task
//     //DB calls,cryptography ,network call
//     setTimeout(function(){console.log("async task");
//     },1000);
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })//it give a callback

// async task this is otput of upper code promise is never returned because we have not connected the then method with resolve method in params
const promiseOne= new Promise(function(resolve,reject){  //it takes a callback function and function takes two params resove and reject

    //Do an async task
    //DB calls,cryptography ,network call
    setTimeout(function(){console.log("async task");
        resolve() //this method connect the resolve with then method
    },1000);
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 returned");
    
})


const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:"zeeshan",email:"zee@gmial.com"})//we can pass data through resolve method
    },1000)
})

promiseThree.then(function(user) ///here we can expect an data by default will come
{
    console.log(user);
    
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error= true;
        if(!error){
            resolve(username:"zeeshan",password:"123444");
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
    
})