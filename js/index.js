let cerrarsesion = document.querySelector("#iniciarsesion");

cerrarsesion.addEventListener('click', function(){
    if(cerrarsesion.textContent === "Iniciar Sesión"){
        cerrarsesion.textContent = "Cerrar Sesión"
    }else if(cerrarsesion.textContent === "Cerrar Sesión"){
        cerrarsesion.textContent = "Iniciar Sesión"
    }else{
        cerrarsesion.textContent = "Cerrar Sesión"
    }
});

