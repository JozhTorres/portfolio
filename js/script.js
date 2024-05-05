// Script.js
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase 'animated' a los elementos con la clase 'proyecto' cuando se haga scroll
    const proyectos = document.querySelectorAll('.proyecto');

    function animarElementos() {
        proyectos.forEach(proyecto => {
            const proyectoPosition = proyecto.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (proyectoPosition < screenPosition) {
                proyecto.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', animarElementos);

    // Reproducir GIF cuando se carga la página
    const gif = document.querySelector('.gif');

    gif.addEventListener('load', function() {
        gif.classList.add('loaded');
    });

    // JavaScript para el efecto de tecleado
    const typingText = document.getElementById('typing-text');

    // Detectar cuando la animación de escritura haya terminado
    typingText.addEventListener('animationend', function(event) {
        if (event.animationName === 'typing') {
            // Iniciar la animación de parpadeo del cursor
            typingText.style.borderRight = '10px solid #ffffff';
            typingText.style.animation = 'blinkCursor 1s infinite alternate';
        }
    });

    window.addEventListener('load', function() {
        // Obtener el elemento del encabezado
        var header = document.getElementById('encabezado');
    
        // Enfocar el encabezado al cargar la página
        header.scrollIntoView({ behavior: 'smooth' });
    });

    // Función para aplicar la animación de fadeIn cuando los elementos son visibles en la ventana
    function fadeInOnScroll(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in-out forwards';
            }else{
            // Eliminar la animación actual antes de observarla nuevamente
            entry.target.style.animation = ''; // Establece la propiedad de animación como una cadena vacía
            }
        });
    }

    // Opciones de configuración para el IntersectionObserver
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0 // Puedes ajustar este valor según tu necesidad
    };

    // Crear un IntersectionObserver
    const observer = new IntersectionObserver(fadeInOnScroll, options);

    // Seleccionar todos los elementos dentro del contenedor con la clase .container
    const elements = document.querySelectorAll('.container > *');

    // Observar cada elemento y aplicar la animación cuando sea visible en la ventana
    elements.forEach(element => {
        observer.observe(element);
    });

});
