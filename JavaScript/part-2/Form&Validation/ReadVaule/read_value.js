let naam = document.querySelector("#name");
let form = document.querySelector("#userForm");

form.addEventListener("submit", function (dets) {
    dets.preventDefault(); 


    //checks valid username
    const v_username = /^[a-zA-Z0-9._-]{3,20}$/;
    let vname = v_username.test("gaurav@xd_");
    console.log(vname);

    //checks valid email
    const v_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let vemail = v_email.test("gm@a.m")
    console.log(vemail);    


    if (naam.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial";
    } else {
        document.querySelector("#hide").style.display = "none";

    }
});
