//lexical scoping in JavaScript, also known as static scoping, dictates that the scope of a variable or function is determined by its physical location within the source code during compilation, not by how or where it is called at runtime.

function abcd(){
    let s = 20;
    function efgh(){
        console.log(s);
    }
}
abcd();
// console.log(s);