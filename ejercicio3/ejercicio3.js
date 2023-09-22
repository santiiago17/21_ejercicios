
let costo= parseInt(prompt("ingrese el valor de su vivienda"))

let tipoCasa= parseInt(prompt("ingrese el número (1) si su inmueble es usado. Ingrese el número (2) si su inmueble es nuevo"))

let comisionNueva= 12
let comisionVieja= 10
let comision= (costo * comisionVieja)/100
let comision1= (costo * comisionNueva)/100

let comisionPropi= costo - comision
let comisionPropi1= costo - comision1


function casos(){
    if (tipoCasa == 1){
        alert (`Usted se llevará ${comisionPropi} de su inmueble usado y la inmoviliaría se llevará ${comision} de su inmueble usado`)
    } else if (tipoCasa == 2){
        alert (`Usted se llevará ${comisionPropi1} de su inmueble usado y la inmoviliaría se llevará ${comision1} de su inmueble usado`)
    } else {
        alert (`Ingrese un valor válido`)
    }
}  
 casos();