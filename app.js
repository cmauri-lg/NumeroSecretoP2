//Variable de ambito global
let numeroSecreto = 0;
let intentos = 1; //Contador

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//Por tener solo un input, si no usar funcion.
    
    //Triple comparacion para ver si es mismo valor mismo tipo de dato
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto 
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;//Incremento
        limpiarCaja();
    }
    return;//No retorna nada pero se coloca como buena practica
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desahibiliar el boton del nuevo el juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
