//Encapsulation in JavaScript, a core principle of Object-Oriented Programming (OOP), involves bundling data (properties) and the methods (functions) that operate on that data into a single unit, typically an object or a class. It aims to restrict direct access to some of the object's internal components, promoting data hiding and preventing accidental or unauthorized modification of data. Interactions with encapsulated data are instead managed through well-defined public interfaces (methods). 

function clickLimiter(){
    let limit = 0
    return function() {
        if(limit < 5){
            console.log(`clicked : ${limit} times`);
        }else{
            console.error("Limit excceded.");
        }
    }
}

let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();
