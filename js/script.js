// Espera a que el contenido del DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los elementos necesarios del DOM
    const menuToggle = document.querySelector('.menu-toggle');  // Botón para mostrar/ocultar el menú móvil
    const navLinks = document.querySelector('.nav-links');      // Contenedor de los enlaces de navegación
    const navbar = document.querySelector('.navbar');          // Barra de navegación
    const body = document.body;                                // Elemento del cuerpo del documento

    // Menú móvil toggle
    // Se asegura de que el menú se pueda mostrar y ocultar al hacer clic en el botón
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Cambia la clase 'active' en el contenedor de enlaces y en el botón del menú
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Cambiar la barra de navegación al hacer scroll
    // Se agrega una clase a la barra de navegación cuando el usuario hace scroll hacia abajo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add("navbar-scrolled");  // Agrega una clase cuando se hace scroll
        } else {
            navbar.classList.remove('navbar-scrolled');  // La elimina cuando se vuelve al inicio
        }
    });

    // Array de transiciones - Definimos los tipos de transiciones disponibles
    const transitions = ['fade', 'slide-out', 'flip-out'];
    let currentTransition = 0;  // Índice para manejar la transición actual

    // Para enlaces de navegación con transición
    // Se agrega un evento de clic a cada enlace de navegación
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Previene el comportamiento predeterminado de enlace
            const href = this.getAttribute('href');  // Obtiene la URL a la que debe navegar

            // Rotar entre las diferentes transiciones
            const transitionClass = transitions[currentTransition];
            currentTransition = (currentTransition + 1) % transitions.length;  // Rota el índice de transiciones

            // Aplica la clase de transición al body
            body.classList.add(transitionClass);

            // Navega a la nueva página después de que se complete la transición
            setTimeout(() => {
                window.location.href = href;  // Realiza la navegación
            }, 500);  // Retraso para que se vea la transición
        });
    });

    // Animación de entrada
    // Se aplica una clase de animación de entrada al body
    body.classList.add('slide-in');

    // Remueve la animación de entrada después de completarse
    setTimeout(() => {
        body.classList.remove('slide-in');
    }, 500);  // El tiempo de duración de la animación es de 500ms
});
