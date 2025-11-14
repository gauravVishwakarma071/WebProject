
//Globle scoped variable
var name = "Gaurav";
function display() {
    console.log(name);
    // Accessible inside the function } 
}
display();


//Local scoped variable
function showMessage() {
    var message = "Hello!";
    console.log(message);
} showMessage();
console.log(message); //Error: message is not defined


//Block scope variable
if (true) {
    let x = 10;
    console.log(x);
} 
console.log(x);//Error: x is not defined

