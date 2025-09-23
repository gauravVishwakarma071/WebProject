let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log(globalVar); // Works
    console.log(localVar);  // Works
}

testScope();
console.log(localVar); // Error: not defined
