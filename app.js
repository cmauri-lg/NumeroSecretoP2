//Variable de ambito global
let numeroSecreto = generarNumeroSecreto();
let intentos = 1; //Contador
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//Por tener solo un input, si no usar funcion.
    
    console.log(intentos);
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

asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');
