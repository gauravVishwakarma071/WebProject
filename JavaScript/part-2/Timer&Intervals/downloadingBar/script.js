let count = 0;
let bar = document.querySelector(".progress-bar");
let intv =  setInterval(function () {
    if (count < 100) {
        count++;
        document.querySelector(".progress-bar").style.width = `${count}%`;
        document.querySelector(".percent").textContent = `${count}%`;
    }else{
        document.querySelector("h2").textContent = "Downloaded.";
        clearInterval(intv);
    }
}, 10000/100);