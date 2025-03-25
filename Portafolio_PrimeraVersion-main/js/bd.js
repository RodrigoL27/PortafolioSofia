// Funciones existentes (se mantienen igual)
function seleccionarValor(valor, botonSeleccionado) {
    document.getElementById("busca").value = valor;
    document.querySelectorAll(".btn-servicio").forEach(boton => {
        boton.classList.remove("selected");
    });
    botonSeleccionado.classList.add("selected");
}

function seleccionarValorPresupuesto(valor, botonSeleccionado) {
    document.getElementById("presupuesto").value = valor;
    document.querySelectorAll(".pre").forEach(boton => {
        boton.classList.remove("selected");
    });
    botonSeleccionado.classList.add("selected");
}

// Nueva función para manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación adicional si es necesaria
    if (!document.getElementById('busca').value || !document.getElementById('presupuesto').value) {
        Swal.fire({
            icon: 'warning',
            title: 'Selecciona todas las opciones',
            text: 'Por favor selecciona tanto el servicio como el presupuesto'
        });
        return;
    }

    // Envío del formulario
    this.submit();
});

// Manejo de respuesta (mejorado)
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('success') === 'true') {
        Swal.fire({
            title: "¡Enviado correctamente!",
            text: "Pronto nos comunicaremos contigo",
            imageUrl: "/Portafolio_PrimeraVersion-main/img/lupa.png", // Ajusta esta ruta
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Confirmación",
            confirmButtonText: "Entendido"
        }).then(() => {
            // Limpiar el formulario después de aceptar
            document.getElementById('contactForm').reset();
            // Limpiar parámetros de URL sin recargar
            history.replaceState({}, document.title, window.location.pathname);
        });
    }
    
    if (urlParams.get('success') === 'false') {
        Swal.fire({
            icon: 'error',
            title: 'Error al enviar',
            text: urlParams.get('error') || 'Ocurrió un error inesperado',
            confirmButtonText: "Intentar nuevamente"
        });
    }
};