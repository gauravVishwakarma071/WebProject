// form.js
let main = document.querySelector("#main");
let form = document.querySelector("#myForm");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value; 
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let hr = document.createElement("hr"); 
    let p = document.createElement("p"); 
    p.textContent = inputs[3].value;


    inputs.forEach(function(inp){
        if(inp.type !== "submit") inp.value = "";
    });

    // "Hy,, everyone i am gaurav a MCA final year student and a aspring full stack java developer, I am proficient in java, kotin, javaScript, SQL. I am also aware of android app and have build some projects like chat application and live streaming platfrom. I have also good understanding of WEB tech including HTML5, CSS, javaScript. currenty i am learning Spring boot and React to level up my skills.




    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(hr);
    card.appendChild(p);

    main.appendChild(card);

});
