let tm = setTimeout(function(){
    console.log("hello")
}, 5000);


let Im = setInterval(function(){
    console.log("JS timer");
},3000);

clearTimeout(tm);
clearInterval(Im);


