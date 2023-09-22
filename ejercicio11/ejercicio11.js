// hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
// a. El usuario solo puede ingresar monedas o billetes
// • Si es moneda, aceptar monedas de 500, 1000 solamente.
// • Si es billete, de 2000 y 5000.
// b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero del servicio, si no tiene que devolver
// el valor de la devolución.
// c. ¡Mostrar un mensaje “vuelve pronto!”

const validateMoney = () => {
    let typeMoney = parseInt(prompt('Ingresa (1) Si va pagar con monedas (2) Si va a pagar con billetes'));
    if (typeMoney == 1) {
        let coin = parseInt(prompt('Solo puedes pagar con monedas de 500 y de 1000\n Ingresa (1) para pagar con monedas de 500\n Ingresa (2) Para pagar con monedas de 1000'));
        const validateAmountCoins = () => {
            if (coin == 1) {
                let amoutCoin500 = parseInt(prompt('Ingrese la cantidad de monedas de 500 con las que va pagar'));
                let accumulateCoins500 = amoutCoin500 * 500;
                return accumulateCoins500;
            } else if (coin == 2) {
                let amountCoin1000 = parseInt(prompt('Ingrese la cantidad de monedas de 1000 con las que va pagar'));
                let accumulateCoins1000 = amountCoin1000 * 1000
                return accumulateCoins1000;

            } else {
                return alert("El valor ingresado no es valido");
            }
        }
        return validateAmountCoins();
    }
    else if (typeMoney == 2) {
        let typeBills = parseInt(prompt('Solo puedes pagar con billetes de 2000 y de 5000\n Ingresa (1) para pagar con billetes de 2000\n Ingresa (2) Para pagar con billetes de 5000'));
        const valiteAmountBills = () => {
            if (typeBills == 1) {
                let bills2000 = parseInt(prompt('Ingrese la cantidad de billetes de 2000 con los que va pagar'));
                let accumulateBills2000 = bills2000 * 2000
                return accumulateBills2000

            } else if (typeBills == 2) {
                let bills5000 = parseInt(prompt('Ingrese la cantidad de billetes de 5000 con los que va pagar'));
                let accumulateBills5000 = bills5000 * 5000
                return accumulateBills5000;

            } else {
                return alert("El valor ingresado no es valido");
            }
        }
        return valiteAmountBills();
    }
    else {
        alert("El valor ingresado no es valido");
    }
}

const priceServices = (moneyUser) => {
    if (moneyUser < 500) {
        document.write('El servicio tiene un costo de $500 pesos, te hace falta dinero');
    } else if (moneyUser == 500) {
        document.write('Vuelve pronto')
    } else {
        let remainingMoney = moneyUser - 500;
        document.write(`El servicio tiene un costo de <b>$500</b> pesos <br><br>Su devuelta es de: <b>$${remainingMoney}</b> pesos`)
    }
}

const validateNumberFuction = () => {
    const validateNumber = validateMoney();
    if (!isNaN(validateNumber)) {
        priceServices(validateNumber);
    }
}
validateNumberFuction();




