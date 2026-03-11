document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('target-video');
    const teamNameElement = document.querySelector('.team-name');
    const selectElement = document.getElementById('video-filter');

    const params = new URLSearchParams(window.location.search);
    const paisUrl = params.get('pais'); 


    const mapaPaises = {
        "mexico": { nombre: "México", archivo: "Gol_Mexico" },
        "usa": { nombre: "USA", archivo: "Gol_USA" },
        "canada": { nombre: "Canadá", archivo: "Gol_Canada" },
        "espana": { nombre: "España", archivo: "Gol_Espana" },
        "colombia": { nombre: "Colombia", archivo: "Gol_Colombia" },
        "uruguay": { nombre: "Uruguay", archivo: "Gol_Uruguay" },
        "japon": { nombre: "Japón", archivo: "Gol_Japon" },
        "corea-del-sur": { nombre: "Corea del Sur", archivo: "Gol_Corea" },
        "sudafrica": { nombre: "Sudáfrica", archivo: "Gol_Sudafrica" },
        "uzbekistan": { nombre: "Uzbekistán", archivo: "Gol_Uzbekistan" },
        "tunez": { nombre: "Túnez", archivo: "Gol_Tunez" }
    };

    if (paisUrl && mapaPaises[paisUrl]) {
        const datos = mapaPaises[paisUrl];

        // Cambiar el título en pantalla
        teamNameElement.innerText = `Selección de ${datos.nombre}`;

        // Cambiar la fuente del video (Ruta: ../GOLES/Gol_Nombre.mp4)
        const rutaVideo = `../GOLES/${datos.archivo}.mp4`;
        videoElement.src = rutaVideo;
        videoElement.load(); // Carga el nuevo video
    }

    // 2. LÓGICA DE FILTROS (Tu código original)
    selectElement.addEventListener('change', (event) => {
        const selectedFilter = event.target.value;
        videoElement.className = 'target-video';
        if (selectedFilter !== 'none') {
            videoElement.classList.add(selectedFilter);
        }
    });
});