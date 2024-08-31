document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("divsito");

    if (div) { // Verifica que el div exista
        div.addEventListener("click", function() {
            alert('¡Hola! Soy el div.');
        });
    } else {
        console.error('No se encontró el div.');
    }
});