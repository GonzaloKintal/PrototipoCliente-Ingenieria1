import { centro } from './centro.js';

function initMap() {
    const map = L.map('map').setView([centro.coordenadas.lat, centro.coordenadas.lng], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);
    
    const marker = L.marker([centro.coordenadas.lat, centro.coordenadas.lng]);
    marker.addTo(map).bindPopup(`${centro.nombre}.<br>Dirección: ${centro.direccion}.`).openPopup();
}

initMap();
