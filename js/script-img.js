// Obtener los elementos del modal
const modal = document.getElementById("imageModal");  // Modal donde se muestra la imagen ampliada
const modalImg = document.getElementById("modalImg");  // Imagen que se muestra en el modal
const captionText = document.getElementById("caption");  // Texto de la descripción de la imagen (generalmente el atributo alt)
const images = document.querySelectorAll(".gallery-image");  // Todas las imágenes en la galería
const closeBtn = document.querySelector(".close");  // Botón de cierre del modal (generalmente una "X")
const navbar = document.querySelector('.navbar');  // Barra de navegación

// Abrir modal cuando se haga clic en una imagen
images.forEach(img => {  // Se recorre cada imagen en la galería
    img.addEventListener("click", function() {  // Se agrega un evento de clic a cada imagen
        modal.style.display = "block";  // Muestra el modal al hacer clic en una imagen
        modalImg.src = this.src;  // Cambia la fuente de la imagen en el modal a la de la imagen seleccionada
        captionText.innerHTML = this.alt;  // Muestra el texto alternativo de la imagen (descripción) en el modal
    });
});

// Cerrar modal al hacer clic en la "X"
closeBtn.addEventListener("click", function() {  // Se agrega un evento de clic al botón de cierre
    modal.style.display = "none";  // Se oculta el modal cuando se hace clic en el botón de cierre
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", function(event) {  // Se agrega un evento de clic al modal
    if (event.target === modal) {  // Si el área fuera de la imagen es clicada
        modal.style.display = "none";  // Se oculta el modal
    }
});

// Código para cambiar la barra de navegación al hacer scroll (unificado)
window.addEventListener('scroll', () => {  // Se agrega un evento de scroll a la ventana
    if (window.scrollY > 100) {  // Si el usuario hace scroll más de 100 píxeles hacia abajo
        navbar.classList.add('navbar-scrolled');  // Se agrega la clase 'navbar-scrolled' para cambiar el estilo de la barra de navegación
    } else {  // Si el usuario vuelve a la parte superior
        navbar.classList.remove('navbar-scrolled');  // Se elimina la clase 'navbar-scrolled' para restaurar el estilo original
    }
});
