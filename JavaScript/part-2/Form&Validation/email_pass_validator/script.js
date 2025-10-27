let email = document.querySelector("#email");
let password = document.querySelector("#password");
//let message =  document.querySelector("#message");
document.querySelector("form").addEventListener("submit", function(evts){
    evts.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let emailans = emailRegex.test(email.value);  
    let passwordans = passwordRegex.test(password.value);

    let isVaild = true;
    
    if(!emailans){
        document.querySelector("#message").textContent = "Wrong email";
        isVaild = false;
    }else if(!passwordans){
        document.querySelector("#message").textContent = "Wrong password";
        isVaild = false;
    }else if(!isVaild){
        document.querySelector("#message").textContent = "both is incorrect."
    }else{
        document.querySelector("#message").textContent = "Everything is correct."
    }
    
});