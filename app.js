let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento); // esto llama el h1 del archivo html
//y lo asigna a una variable
    elementoHtml.innerHTML = texto;
    return;

}

function verificarIntengo(){
    //let numeroUsuario = document.querySelector('input'); esta es otra opcion si solo hay un input en el html
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto)
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');

        }else{
            asignarTextoElemento('p','El número secreto es mayor');
            
        }
        intentos++;
        LimpiarCaja();
    }
    return;
    // para ver en la consola de google
    //console.log(numeroUsuario);
}
function LimpiarCaja(){
    //let ValorCaja = document.querySelector('#valorUsuario');
    //ValorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}


function GenerarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    //otra opcion es retornar directamente sin una variable
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles!')

    }else{
    //si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    //indicar mensaje de intervalo de numeros
    //generar el número aleatorio
    //dehabiliar el boton de nuevo juego
    //inicializar el número de intentos
    LimpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disable', 'true');


}

condicionesIniciales();

