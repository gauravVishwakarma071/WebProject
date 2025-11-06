// JavaScript is a lexically scoped language, not a dynamically scoped one. This means that the scope of a variable in JavaScript is determined by where the variable is declared in the source code, not by where the function containing the variable is called at runtime.

let x = 12;

function zyx(){
    console.log(x);
}

function fgh(){
    let x = 15;
    zyx();
}
zyx();