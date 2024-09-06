document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("botoncito");
        btn.addEventListener("click",function(){ 
        event.stopPropagation();//si se hace click en el boton, el java no debe realizar nada (la alerta esta en el HTML)
        })
    var div = document.getElementById("divsito");
    div.addEventListener("click", function() {
       alert('¡Hola! Soy el div.');}
)});