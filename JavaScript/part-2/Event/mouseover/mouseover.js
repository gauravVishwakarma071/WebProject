let div = document.querySelector("#abcd");

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "yellow";
});
div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "red";
});