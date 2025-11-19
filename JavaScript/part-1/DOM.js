//DOM allows JavaScript to access, modify, create or delete elements

document.getElementById("demo").innerHTML = "Welcome to DOM!"

//Selecting element of HTML.
var firstPara = document.querySelector("p");
firstPara.style.color = "red";

// modification of Attribute of element 
var link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com");

//Changing CSS via DOM
var box = document.getElementById("box");
box.style.backgroundColor = "lightblue";
box.style.border = "2px solid black";

//Event-Based Manipulation.
document.getElementById("btn").onclick = function () {
    document.getElementById("message").textContent = "Button clicked!";
}; 