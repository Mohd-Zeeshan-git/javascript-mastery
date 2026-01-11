const randomColor=function(){
    const hex= "123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        // Math.floor(Math.random()*16)//this will give sixteen random number
        color += hex[Math.floor(Math.random()*16)] //this will give the position of hex
        
    }
    return color;
}


let intervalId;
// console.log(intervalId); //undefined

const startChangingColor= function(){

    function changeBgColor(){
        document.body.style.backgroundColor= randomColor();
        // console.log("changed");
        
    }
    if(!intervalId){
  intervalId = setInterval(changeBgColor,1000);
    }
}
const stopChangingColor= function(){
clearInterval(intervalId);
intervalId= null;// flush out intervalId 
// console.log("stoped")

}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)


