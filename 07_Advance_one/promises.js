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
    // console.log(user);
    
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error= true;
        if(!error){
            resolve({username:"zeeshan",password:"123444"});
        }
        else {
            reject("ERROR: something went wrong")
        }
    },1000)
}).then((user)=>{
    // console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);  
}).finally(()=> {console.log("promise is either resolved or rejected");}
)


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error= true
        if(!error){
            resolve({username:"zeeshan",password:"123444"});
        }
        else {
            reject("ERROR: something went wrong")
        }
    },1000)
})

async function consumePromisefive(){
    // const response = await promiseFive //no need to call
    // console.log(response);  //UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: something went wrong".
    // //insted write in try catch block

    try {
         const response = await promiseFive //no need to call
    console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
}

// consumePromisefive()


// async function getAllUser(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') //it return a promise  return data in string
//     // const data =response.json() //this will give error becouse it takes time to change data in json so await i needed
//    try {
//      const data = await response.json();
//      console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    }
// }
// getAllUser() 

//using then catch
// fetch('https://jsonplaceholder.typicode.com/users')  //here data  is in string
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error=>console.log(error))
    



//practice question
    //   function a (){
    //     console.log("e")
    //   }
    //   a();
    //   console.log(typeof a)


    //   if(function b(){
    //     console.log("b");
    //   }){
    //     console.log("hello")
    //     console.log(typeof b)
    //   }
