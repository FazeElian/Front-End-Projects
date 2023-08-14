// Responsive Menu
    //Despliegue Ítems Inicio
    const menuIconResponsive = document.querySelector(".btn-menu-responsive");
    const navMenuTop = document.querySelector(".nav-menu");

    menuIconResponsive.addEventListener("click", () =>{
        navMenuTop.classList.toggle("nav-menu-visible");
    });

// Onlick => scroll de Sección Galería de Proyectos
    // Obtener el elemento del texto en el que haremos clic
    const projects = document.getElementById('link-projects');

    // Obtener el elemento de la sección a la que queremos desplazarnos
    const projectsSection = document.getElementById('sect-projects');

    // Agregar un evento de clic al projects
    projects.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del projects

        // Obtener la posición de la sección destino en la página
        const projectsSectionRect = projectsSection.getBoundingClientRect();

        // Añadir un margen superior de 50 píxeles al momento de hacer el scroll
        const marginTop = 30;
        const adjustedTop = projectsSectionRect.top - marginTop;

        // Realizar la animación de desplazamiento hacia la sección destino
        window.scrollBy({
            top: adjustedTop, // Desplazarse hacia arriba o hacia abajo según la posición ajustada de la sección destino
            behavior: 'smooth' // Hace que el desplazamiento sea suave
        });
    });

// Onlick => scroll de Sección contacto
    // Obtener el elemento del texto en el que haremos clic
    const contact = document.getElementById('link-contact');

    // Obtener el elemento de la sección a la que queremos desplazarnos
    const contactSection = document.getElementById('sect-contact');

    // Agregar un evento de clic al contact
    contact.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del contact

        // Obtener la posición de la sección destino en la página
        const contactSectionRect = contactSection.getBoundingClientRect();

        // Añadir un margen superior de 50 píxeles al momento de hacer el scroll
        const marginTop = 45;
        const adjustedTop = contactSectionRect.top - marginTop;

        // Realizar la animación de desplazamiento hacia la sección destino
        window.scrollBy({
            top: adjustedTop, // Desplazarse hacia arriba o hacia abajo según la posición ajustada de la sección destino
            behavior: 'smooth' // Hace que el desplazamiento sea suave
        });
    });