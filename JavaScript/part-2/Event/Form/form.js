// form.js
let form = document.querySelector("#myForm");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
    );
});
