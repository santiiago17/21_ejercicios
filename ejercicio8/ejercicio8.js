const x = parseFloat(prompt('elige la longitud del lado 1'));
const y = parseFloat(prompt('elige la longitud del lado 2'));
const z = parseFloat(prompt('elige la longitud del lado 3'));

 

function requestData(){
   if(x == y && y == z){
        alert('Es un triangulo equilatero');
   }else{
        alert('no es un triangulo equilatero');
   }

}
requestData();





