//The Event Listener Model is a approach to handle events in JavaScript.

let btn = document.getElementById("btn"); btn.addEventListener("click", function () { alert("First Event Listener"); });
btn.addEventListener("click", function () {
    alert("Second Event Listener");
});


//Example of removing an event listener: 
function showMessage() {
    alert("This will run only once.");
    btn.removeEventListener("click", showMessage);
} btn.addEventListener("click", showMessage)