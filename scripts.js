// Modal de imágenes
function openModal(imageElement) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const imageCaption = document.getElementById('image-caption');

    // Mostrar la imagen y el caption en el modal
    modal.style.display = "block";
    modalImage.src = imageElement.src;
    imageCaption.innerText = imageElement.alt;
}

// Cerrar el modal al hacer clic en el botón de cerrar
const closeModalButton = document.getElementById('close-modal');
closeModalButton.addEventListener('click', () => {
    const modal = document.getElementById('image-modal');
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (event) => {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Función para mostrar el modal con texto e imagen
function mostrarTextoModal() {
    document.getElementById("texto-modal").style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("texto-modal").style.display = "none";
}


// Función para mostrar el modal con texto e imagen
function mostrarTextoModalh() {
    document.getElementById("texto-modal").style.display = "flex";
}

// Función para cerrar el modal
function cerrarModalh() {
    document.getElementById("texto-modal").style.display = "none";
}



function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
}

