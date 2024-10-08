// Obtener el formulario
const encuestaForm = document.getElementById('encuesta-form');

// Agregar el evento 'submit' para prevenir el comportamiento predeterminado
encuestaForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Mostrar SweetAlert de éxito
    Swal.fire({
        icon: 'success',
        title: 'Gracias por completar la encuesta',
        text: 'Sus respuestas han sido registradas. Puede consultarlas ahora.',
        confirmButtonText: 'Aceptar'
    });
});
