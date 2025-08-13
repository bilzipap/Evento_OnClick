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

let namedef = document.querySelectorAll(".Nombre_gato")
let btnmegusta = document.querySelectorAll(".botonmegusta")
let megusta = document.querySelectorAll(".Likecount")

for(let i = 0; i < btnmegusta.length; i++){
    btnmegusta[i].addEventListener('click', function(){
        alert(namedef[i].textContent+' '+ "le diste like!!")
        megusta[i].textContent++;
    });
}