//In JavaScript, a private counter can be implemented effectively using closures. Closures allow an inner function to retain access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing. This mechanism enables the creation of private variables, as they are not directly accessible from outside the function that defines them. 

function plus(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let fnc_1 =  plus();
fnc_1();
fnc_1();
fnc_1();

let fnc_2 = plus();
fnc_2();
fnc_2();
fnc_2();
fnc_2();
fnc_2();
fnc_2();