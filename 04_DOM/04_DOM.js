document.getElementById("demo").innerHTML = "Hello DOM!";

// To hide the span element inside the h1
document.querySelector("#demo span").style.display = "none";

// To show the span element inside the h1
// document.querySelector("#demo span").style.display = "inline";

const bgBlackDiv = document.querySelector(".bg-black");
bgBlackDiv.style.backgroundColor = "lightblue";
bgBlackDiv.style.padding = "20px";
bgBlackDiv.style.borderRadius = "10px";

const paragraph = bgBlackDiv.querySelector("#demo");
paragraph.innerHTML;// Get the current text with HTML tags
paragraph.innerText;// Get the text without HTML tags
paragraph.textContent;// Get the text content including hidden elements

// const list = document.getElementById("itemList");
// const newItem = document.createElement("li");
// newItem.textContent = "Item 4";
// list.appendChild(newItem);

const list =document.querySelector("#itemList");

const items=document.querySelectorAll(".item"); //return node list 
items.forEach((item)=>{
    console.log(item.textContent);
});
 
const button =document.getElementsByClassName("item"); //return html collection
for(let i=0;i<button.length;i++){
    console.log(button[i].textContent);
}
button[0].style.color="red";

Array.from(button).forEach((btn)=>{
    console.log(btn.textContent);
});
