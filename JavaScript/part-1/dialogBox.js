//Alart box
alert("Welcome to my page");

//Confirm box
var userResponse = confirm("Are you sure you want to delete this file?");
if (userResponse) {
    alert("File deleted successfully.");
} else {
    alert("Action canceled.");
}

//Prompt box
var naam = prompt("enter your name");
console.log("Hello " + naam);