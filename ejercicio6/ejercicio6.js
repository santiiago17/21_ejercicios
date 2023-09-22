let menu = parseInt(prompt('1.pizza 2.sandwiches 3. ensalada'));
let porciones = 0;
let salsa = 'si'

const pizza = 7000;
const sandwiches = 5000;
const ensalada = 15000;
const precioSalsa = 3000
costoTotal = 0;

function comidas(){
    if(menu == 1){
        porciones = parseInt(prompt('elige la cantidad de porciones'));
        salsa = prompt('desea ponerle salsa');
        if(salsa == 'si'){
           costoTotal = porciones*pizza + precioSalsa;
        }else if(salsa == 'no'){
            costoTotal = porciones*pizza;
        }alert(`El costo total es : ${costoTotal}`);
        }
        else{
            alert('este producto no existe');
        }
        if(menu == 2){
        porciones = parseInt(prompt('elige la cantidad de porciones'));
        salsa = prompt('¿Desea ponerle salsa?');
        if(salsa == 'si'){
            costoTotal = porciones*sandwiches + precioSalsa;
        }else if(salsa == 'no'){
            costoTotal = porciones * sandwiches;
        }alert(`El costo total es : ${costoTotal}`);
        }
        if(menu == 3){
        porciones = parseInt(prompt('elige la cantidad de porciones'));
        salsa = prompt('desea ponerle salsa');
        if(salsa == 'si'){
            costoTotal = porciones*ensalada + precioSalsa;
        }else if(salsa == 'no'){
            costoTotal = porciones * ensalada;
        }
        alert(`El costo total es : ${costoTotal}`);
        }
}
comidas();


// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación):
// a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
// b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
// • Pizza a 7000 por unidad
// • Sándwich a 5000 unidad
// • Ensalada a 15000 unidad
// c. Se le pide al usuario si desea agregar salsa que vale 3000.
// d. El sistema indica el costo que paga el cliente por su product