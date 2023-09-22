// Responsive Menu
    //Despliegue Ítems Inicio
    const menuIconResponsive = document.querySelector(".btn-menu-icon");
    const navMenuTop = document.querySelector(".nav-menu");

    menuIconResponsive.addEventListener("click", () =>{
        navMenuTop.classList.toggle("nav-menu-visible");
    });