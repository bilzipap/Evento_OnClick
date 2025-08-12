let cerrarsesion = document.querySelector("#iniciarsesion");

cerrarsesion.addEventListener('click', function(){
    if(cerrarsesion.textContent === "Iniciar Sesión"){
        cerrarsesion.textContent = "Cerrar Sesión"
    }else{
        cerrarsesion.textContent = "Iniciar Sesion"
    }
});