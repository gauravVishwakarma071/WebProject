// form.js

let form = document.querySelector("#myForm");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    console.log("✅ Form submission prevented!");
    alert("Form submission prevented! Page will not reload.");
});
