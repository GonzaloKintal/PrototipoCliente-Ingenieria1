var map = L.map('map').setView([-34.5361396, -58.7205882], 15); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcador de Hospital
var marker = L.marker([-34.5361396, -58.7205882]).addTo(map)
    .bindPopup('Hospital Municipal Dr. Raúl F. Larcade.<br>Dirección: Av. Pte. J. D. Perón 2311, San Miguel, Provincia de Buenos Aires.')
    .openPopup();


// Evento al presionar el botón de completar encuesta
document.getElementById("completar-encuesta").addEventListener("click", function() {
    window.location.href = "encuesta.html"; 
});

