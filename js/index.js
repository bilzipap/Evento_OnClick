let cerrarsesion = document.querySelector("#iniciarsesion");

cerrarsesion.addEventListener('click', function(){
    if(cerrarsesion.textContent === "Iniciar Sesión"){
        cerrarsesion.textContent = "Cerrar Sesión"
    }else{
        cerrarsesion.textContent = "Iniciar Sesión"
    }
});

let botondef = document.querySelector("#updef");

botondef.addEventListener('click', function(){
    this.remove()
});

let megusta = document.querySelector(".Likecount")
let namedef = document.querySelector(".Nombre_gato")
let btnmegusta = document.querySelector(".botonmegusta")


btnmegusta.addEventListener('click', function(){
    alert(namedef.textContent +' '+ "le diste like!!")
})