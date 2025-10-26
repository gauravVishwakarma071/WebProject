let naam = document.querySelector("#name");
let form = document.querySelector("#userForm");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    if (naam.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial";
    } else {
        document.querySelector("#hide").style.display = "none";

    }
});
