let inp = document.querySelector("input");
let sp = document.querySelector("span");

inp.addEventListener("input", function(dets){
    let left = 20 - inp.value.length;
    sp.textContent = left;

    if(left<0){
        sp.style.color = "red";
    }
    else{
        sp.style.color = "black";
    }

});
