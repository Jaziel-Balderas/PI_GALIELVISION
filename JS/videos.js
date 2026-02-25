document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el select y el video único
    const selectElement = document.getElementById('video-filter');
    const videoElement = document.getElementById('target-video');

    selectElement.addEventListener('change', (event) => {
        const selectedFilter = event.target.value;

        // Limpiamos cualquier filtro anterior dejando solo la clase base
        videoElement.className = 'target-video';

        // Si el usuario elige un filtro válido, le agregamos la clase CSS correspondiente
        if (selectedFilter !== 'none') {
            videoElement.classList.add(selectedFilter);
        }
    });
});