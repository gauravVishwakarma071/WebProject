//Scope can be consider as a area that define the accessibility of variables and functions.

// 1. Globle scope - can be used at any place of code.
var globle = "gauarv";

// 2. Functional scope
function abcd(){
    var fun_nal = 12; //it is accessible only in his parent function.
}

// 3. block scope
{
    var block = 34
}

console.log(globle);
console.log(block);