document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones que deben abrir/cerrar la cola
    const toggleButtons = document.querySelectorAll('.queue-toggle-btn');
    const queueOverlay = document.querySelector('.queue-overlay');

    // Añade un evento de clic a cada botón
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar u ocultar la cola
            queueOverlay.classList.toggle('active');
        });
    });
});