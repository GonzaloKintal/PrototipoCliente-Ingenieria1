function initEncuesta() {
    const preguntas = window.preguntas; 
    const form = document.getElementById("encuesta-form");
    const preguntasContainer = document.getElementById("preguntas-container");
    const comentarioField = document.getElementById('comentario');

    generarPreguntas(preguntas, preguntasContainer);
    if (verificarEncuestaCompletada()) {
        mostrarAlertaEncuestaCompletada();
    }
    manejarEnvioFormulario(form, comentarioField);
}

function generarPreguntas(preguntas, container) {
    preguntas.forEach((pregunta, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label><strong>${index + 1}. ${pregunta.texto}</strong></label><br>
            <div class="opciones">
                ${[...Array(10).keys()].map(i => `
                    <label><input type="radio" name="pregunta${index + 1}" value="${i + 1}" required> ${i + 1}</label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

function verificarEncuestaCompletada() {
    return sessionStorage.getItem('encuestaCompletada') === 'true';
}

function mostrarAlertaEncuestaCompletada() {
    Swal.fire({
        icon: 'warning',
        title: 'Encuesta ya completada',
        text: 'Ya has enviado la encuesta anteriormente. No puedes volver a completarla.',
        allowOutsideClick: false,
        confirmButtonText: 'Volver a la página principal',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "index.html"; 
        }
    });
}

function manejarEnvioFormulario(form, comentarioField) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (verificarEncuestaCompletada()) {
            mostrarAlertaEncuestaCompletada();
        } else {
            disableFormInputs(form, comentarioField);
            sessionStorage.setItem('encuestaCompletada', 'true');
            mostrarAlertaEncuestaCompletadaExito();
        }
    });
}

function mostrarAlertaEncuestaCompletadaExito() {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por completar la encuesta',
        text: 'Sus respuestas han sido registradas.',
        confirmButtonText: 'Aceptar'
    });
}

function disableFormInputs(form, comentarioField) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = true; 
    });
    if (comentarioField) {
        comentarioField.disabled = true;
    }
}

initEncuesta();