function seleccionarValor(valor, botonSeleccionado) {
    document.getElementById("busca").value = valor;
    console.log("Valor seleccionado:", valor);

    // Eliminar la clase 'selected' de todos los botones
    document.querySelectorAll(".btn-servicio").forEach(boton => {
        boton.classList.remove("selected");
    });

    // Agregar la clase solo al botón seleccionado
    botonSeleccionado.classList.add("selected");
}

// Función para almacenar el valor de los botones de presupuesto
function seleccionarValorPresupuesto(valor, botonSeleccionado) {
    document.getElementById("presupuesto").value = valor;
    console.log("Valor seleccionado:", valor);
    
    // Eliminar la clase 'selected' de todos los botones
    document.querySelectorAll(".pre").forEach(boton => {
        boton.classList.remove("selected");
    });

    // Agregar la clase solo al botón seleccionado
    botonSeleccionado.classList.add("selected");
}


window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        Swal.fire({
            title: "Enviado correctamente, pronto se comunicaran contigo",
            imageUrl: "https://drive.google.com/file/d/1wOGe3C4n4kKsRrYUajTHzckTMs2B1uy7/view?usp=sharing",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }
  };