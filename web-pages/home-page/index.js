let hambugerIcon = document.querySelector(".hambuger-wrapper")
let closeIcon = document.querySelector(".close-menu")
let navMenu = document.querySelector(".navigation-bar")

hambugerIcon.addEventListener("click",()=>{
    if(navMenu.style.display == "flex"){
        navMenu.style.display = "none"
    }else{navMenu.style.display = "flex"}
})


closeIcon.addEventListener("click",()=>{
    if(navMenu.style.display == "flex"){
        navMenu.style.display = "none"
    }else{navMenu.style.display = "flex"}
})