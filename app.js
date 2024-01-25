//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

//console.log(numeroSecreto);  variable de alcance global solo se ejecuta cuando inicia el programa

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return; //buena practica 
}
function verificarIntento(){
    //let numeroDeUsuario = document.querySelector('input'); solo para buscar un solo elemento
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else {
            if (numeroDeUsuario > numeroSecreto)
            {
            asignarTextoElemento('p','El numero secreto es menor');
            }
            else {
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto); //variable de alcance dentro de la funcion
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); 
    console.log(numeroDeUsuario === numeroSecreto); // el triple = no compara el tipo de dato y que sea igual en valor
   
   */ return; 
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
   //valorCaja.value = '';
}

function generarNumeroSecreto(){
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    else{
    //si el numero generado esta incluido e n la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   // return numeroSecreto;  //nos regresa un valor entero
    }

}



function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //necesitamos limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio intervalo numeros
    condicionesIniciales();
    //generar numero aleatorio
    //inicializar el numero de intentos --dentro de funcion cindiciones Iniciales
     //desabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//asignarTextoElemento('h1', 'Juego del numero secreto!');
//asignarTextoElemento('p', 'Indica un numero del 1 al 10');
condicionesIniciales();