const navBoton = document.querySelector(".boton")
const navMenu = document.querySelector(".menu")

navBoton.addEventListener("click",() =>{
    navMenu.classList.toggle("menu_visible")
})