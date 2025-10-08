let apple = document.querySelector("h2");
apple.addEventListener("click", function () {
    apple.style.color = "red";
});

let p = document.querySelector("p");

function yellow(){
    p.style.color = "yellow";
};
function red(){ 
    apple.style.color = "red";
};

// p.addEventListener("click",yellow);
p.addEventListener("dblclick",red);
// p.removeEventListener("dblclick", yellow);   

let input = document.querySelector("input");
input.addEventListener("input", function(data){
    console.log(data);
});