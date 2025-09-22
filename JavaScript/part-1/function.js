//Function declaration

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Gaurav"); 



//Function Expresion
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); 


//Arrow Functions (ES6)
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); 

//Parameter and argument
function greet(message, name) {
    console.log(message + ", " + name);
}
greet("Hello", "Gaurav"); // "Hello, Gaurav"


// Return Statement
// Functions can return values using return:
function square(num) {
    return num * num;
}

let result = square(6); // 36
console.log(result);
