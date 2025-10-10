let btn = document.querySelector("#btn");
let fileInp = document.querySelector("#file");

btn.addEventListener("click", function(){
    fileInp.click();
});

fileInp.addEventListener("change",function (dets) {

    const file = dets.target.files[0];

    if(file){
        btn.textContent  = file.name;
    }
});