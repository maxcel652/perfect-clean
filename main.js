const hamburgerBtn = document.getElementById("hamburger")
const menu = document.getElementById("menu")

hamburgerBtn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
})