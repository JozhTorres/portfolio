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
    const text = "Hola Mundo, mi nombre es Joshua Torres, Web Developer";
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingTextElement.textContent += text[index];
            index++;
            setTimeout(typeText, 100); // Velocidad de escritura (en milisegundos)
        }
    }

    typeText();

    window.addEventListener('load', function() {
        // Obtener el elemento del encabezado
        var header = document.getElementById('encabezado');
    
        // Enfocar el encabezado al cargar la página
        header.scrollIntoView({ behavior: 'smooth' });
    });

});
