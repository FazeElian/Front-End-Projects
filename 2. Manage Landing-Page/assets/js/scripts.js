// Responsive Menu
    const menuIconResponsive = document.querySelector(".btn-menu-responsive");
    const navMenuTop = document.querySelector(".nav-menu");
    menuIconResponsive.addEventListener("click", () =>{
        navMenuTop.classList.toggle("nav-menu-visible");
    });

// Fade In by Scroll for Containers Tips Manage
    const sections = document.querySelectorAll('.cont-about-manage');

    function fadeInElements() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Comprobar si la sección está en la vista actual
        if (rect.top < windowHeight && rect.bottom >= 0) {
        section.style.opacity = '1';
        }
    });
    }

    // Ejecutar fadeInElements al cargar la página y al hacer scroll
    window.addEventListener('load', fadeInElements);
    window.addEventListener('scroll', fadeInElements);