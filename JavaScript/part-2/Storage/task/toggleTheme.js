function applyTheme(theme){
    document.body.classList.remove("dark","light");
    document.body.classList.add(theme);
}

function getSystemTheme(){
    return window.matchMedia("(prefer-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function setInitialTheme(){
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());
}

//set initial theme
setInitialTheme();

//changes only no theme is store at the system.
window
    .matchMedia("(prefer-color-scheme: dark)")
    .addEventListener("change", ()=>{
        if(!localStorage.getItem("theme")){
            applyTheme(getSystemTheme());
        }
    });

// button to toggle theme color
document.querySelector("button").addEventListener("click", ()=>{
    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";
    
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme",newTheme);    
});