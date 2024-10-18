const preguntas = [
    {
        texto: "¿Cómo calificaría la atención del personal?",
        nombre: "pregunta1"
    },
    {
        texto: "¿Cómo calificaría la limpieza del centro?",
        nombre: "pregunta2"
    },
    {
        texto: "¿Cómo calificaría el tiempo de espera?",
        nombre: "pregunta3"
    },
    {
        texto: "¿Cómo calificaría la calidad de la atención médica?",
        nombre: "pregunta4"
    },
    {
        texto: "¿Cómo calificaría la claridad de las explicaciones dadas?",
        nombre: "pregunta5"
    },
    {
        texto: "¿Cómo calificaría la puntualidad del personal?",
        nombre: "pregunta6"
    },
    {
        texto: "¿Cómo calificaría las instalaciones del centro?",
        nombre: "pregunta7"
    },
    {
        texto: "¿Cómo calificaría la variedad de servicios ofrecidos?",
        nombre: "pregunta8"
    },
    {
        texto: "¿Cómo calificaría el proceso de programación de citas?",
        nombre: "pregunta9"
    },
    {
        texto: "¿Cómo calificaría la atención telefónica?",
        nombre: "pregunta10"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("encuesta-form");
    const comentarioField = document.getElementById('comentario');

    preguntas.forEach(pregunta => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label>${pregunta.texto}</label><br>
            <div class="opciones">
                ${[...Array(10).keys()].map(i => `   
                    <label><input type="radio" name="${pregunta.nombre}" value="${i + 1}" required> ${i + 1}</label>
                `).join('')}
            </div>
        `;
        
        form.insertBefore(div, form.children[0]); 
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (sessionStorage.getItem('encuestaCompletada') === 'true') {
            Swal.fire({
                icon: 'warning',
                title: 'Encuesta ya completada',
                text: 'Ya has enviado la encuesta anteriormente. No puedes volver a enviarla.',
                confirmButtonText: 'Aceptar'
            });
            return; 
        }

        disableFormInputs(form, comentarioField);
        sessionStorage.setItem('encuestaCompletada', 'true');

        Swal.fire({
            icon: 'success',
            title: 'Gracias por completar la encuesta',
            text: 'Sus respuestas han sido registradas.',
            confirmButtonText: 'Aceptar'
        });
    });
});

function disableFormInputs(form, comentarioField) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = true; 
    });
    if (comentarioField) {
        comentarioField.disabled = true;
    }
}
