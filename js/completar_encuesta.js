function clickBotonCompletarEncuesta() {
    if (sessionStorage.getItem('encuestaCompletada') === 'true') {
        mostrarAdvertencia();
    } else {
        window.location.href = "encuesta.html"; 
    }
}

function mostrarAdvertencia() {
    Swal.fire({
        icon: 'warning',
        title: 'Encuesta ya completada',
        text: 'Ya has enviado la encuesta anteriormente. No puedes volver a completarla.',
        confirmButtonText: 'Aceptar'
    });
}

document.getElementById("completar-encuesta").addEventListener("click", clickBotonCompletarEncuesta);