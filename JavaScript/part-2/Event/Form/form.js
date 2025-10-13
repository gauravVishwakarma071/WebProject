// form.js
let form = document.querySelector("#myForm");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute(
        "src",
        "my_pic.jpeg"
    );
});
