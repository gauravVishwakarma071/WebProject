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

//for gettig input
let input = document.querySelector("input");
input.addEventListener("input", function(dets){
    if(dets.data !== null){
        console.log(dets.data);
    }
});

//change event - item selected in select 
let h3 = document.querySelector("h3");
let sel = document.querySelector("select");

sel.addEventListener("change", function(dets){
    let vlu = dets.target.value;
    console.log(vlu);
    h3.textContent = vlu + " Selected";
});