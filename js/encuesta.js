import { preguntas } from './preguntas.js';

function initEncuesta() {
    const form = document.getElementById("encuesta-form");
    const preguntasContainer = document.getElementById("preguntas-container");
    const comentarioField = document.getElementById('comentario');

    generarPreguntas(preguntas, preguntasContainer);
    manejarEnvioFormulario(form, comentarioField);
}

function generarPreguntas(preguntas, container) {
    preguntas.forEach((pregunta, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label>${pregunta.texto}</label><br>
            <div class="opciones">
                ${[...Array(10).keys()].map(i => `
                    <label><input type="radio" name="pregunta${index + 1}" value="${i + 1}" required> ${i + 1}</label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

function manejarEnvioFormulario(form, comentarioField) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (sessionStorage.getItem('encuestaCompletada') === 'true') {
            mostrarAlertaEncuestaCompletada();
            return;
        }

        disableFormInputs(form, comentarioField);
        sessionStorage.setItem('encuestaCompletada', 'true');

        mostrarAlertaEncuestaCompletadaExito();
    });
}

function mostrarAlertaEncuestaCompletada() {
    Swal.fire({
        icon: 'warning',
        title: 'Encuesta ya completada',
        text: 'Ya has enviado la encuesta anteriormente. No puedes volver a enviarla.',
        confirmButtonText: 'Aceptar'
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
