// Responsive Menu
const menuIconResponsive = document.querySelector(".btn-menu-responsive");
const navMenuTop = document.querySelector(".nav-menu");
menuIconResponsive.addEventListener("click", () =>{
    navMenuTop.classList.toggle("nav-menu-visible");
});