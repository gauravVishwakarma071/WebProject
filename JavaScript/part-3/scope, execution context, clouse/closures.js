//A closure in JavaScript is a function bundled together with its lexical environment. This means that a closure gives an inner function access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. 


function abcd(){
    let x = 10;
    return function (){
        console.log(x);
    }
}

let fnc = abcd();
console.log(fnc);