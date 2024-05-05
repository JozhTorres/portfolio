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

});
