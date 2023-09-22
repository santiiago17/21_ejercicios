const revistas = 500;
const libro  = 600;
const multa = 10000;

let total = 0;
let devolucion = 0;
let retraso = 0;
let tipoMaterial = 0;

function biblioteca(){
    devolucion = parseInt(prompt('(1) Si es devolucion (2) Si es perdida'));

    if(devolucion === 1){
        tipoMaterial = parseInt(prompt('(1) revista (2) libro'));
        retraso = parseInt(prompt('Indique la cantidad de dias de retraso'));
    }else if(devolucion === 2){
        alert('Debe pagar : ' + multa);
    }
}
function dRetraso(){
    if(tipoMaterial === 1 ){
        total = retraso * revistas;
    }else if(tipoMaterial === 2){
        total = retraso * libro;
    }alert(`cantidad de dias de retraso son ${retraso} dias y el total a pagar es ${total} `);
        
}
function ejecutarFuncion(seleccion){
    switch (seleccion) {
        case 1:
            biblioteca();
            break;
    
        case 2:
            dRetraso();
            break;
        
    }
}
ejecutarFuncion(1);
ejecutarFuncion(2);


// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplar












