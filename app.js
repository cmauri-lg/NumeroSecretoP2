//Variable de ambito global
let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function intentoDeUsuario(){
    alert('Click desde el boton');
    return;//No retorna nada pero se coloca como buena practica
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');