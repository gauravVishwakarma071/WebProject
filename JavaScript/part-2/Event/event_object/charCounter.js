let inp = document.querySelector("input");
let sp = document.querySelector("span");

inp.addEventListener("input", function(dets){
    if(dets.key === " "){
    }else{
        sp.textContent = inp.value.length;
    }
});
