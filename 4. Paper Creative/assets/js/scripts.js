// Responsive Menu
    // Drop-Down Menu List
    const menuIconResponsive = document.querySelector(".btn-menu-responsive");
    const navMenuTop = document.querySelector(".nav-menu");

    menuIconResponsive.addEventListener("click", () =>{
        navMenuTop.classList.toggle("nav-menu-visible");
    });  

// Onlick => scroll to contact section
    // Get the element that we'll click
    const contact = document.getElementById('link-contact');

    // Get the element to the section to scroll
    const contactSection = document.getElementById('sect-contact');

    // Add a event
    contact.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del contact

        // Obtener la posición de la sección destino en la página
        const contactSectionRect = contactSection.getBoundingClientRect();

        // Añadir un margen superior de 50 píxeles al momento de hacer el scroll
        const marginTop = 30;
        const adjustedTop = contactSectionRect.top - marginTop;

        // Animation
        window.scrollBy({
            top: adjustedTop, 
            behavior: 'smooth'
        });
    });