const cuentas = [
    { numero: '123456', pin: '1234', saldo: 1000 },
    { numero: '789012', pin: '5678', saldo: 1500 },
  ];
  
  function validarCliente(numeroCuenta, pin) {
    const cuenta = cuentas.find((cuenta) => cuenta.numero === numeroCuenta && cuenta.pin === pin);
    return cuenta;
  }
  
  function retirar(cuenta, monto) {
    if (cuenta.saldo >= monto) {
      cuenta.saldo -= monto;
      return `Retiro exitoso. Saldo restante: $${cuenta.saldo}`;
    } else {
      return 'Fondos insuficientes.';
    }
  }
  
  function depositar(cuenta, monto) {
    cuenta.saldo += monto;
    return `Depósito exitoso. Saldo actual: $${cuenta.saldo}`;
  }
  
  function transferir(origen, destino, monto) {
    if (origen.saldo >= monto) {
      origen.saldo -= monto;
      destino.saldo += monto;
      return `Transferencia exitosa. Saldo de origen: $${origen.saldo}, Saldo de destino: $${destino.saldo}`;
    } else {
      return 'Fondos insuficientes para la transferencia.';
    }
  }
  
  function consultarSaldo(cuenta) {
    return `Saldo actual: $${cuenta.saldo}`;
  }
  
  function cajeroAutomatico() {
    const numeroCuenta = prompt('Ingrese su número de cuenta:');
    const pin = prompt('Ingrese su PIN:');
    const cliente = validarCliente(numeroCuenta, pin);
    if (cliente) {
      alert('Bienvenido al cajero automático.');
  
      while (true) {
        const opcion = prompt(
          'Elija una opción:\n1. Retirar\n2. Depositar\n3. Transferir\n4. Consultar Saldo\n5. Salir'
        );
  
        switch (opcion) {
          case '1':
            const montoRetiro = parseFloat(prompt('Ingrese el monto a retirar:'));
            alert(retirar(cliente, montoRetiro));
            break;
          case '2':
            const montoDeposito = parseFloat(prompt('Ingrese el monto a depositar:'));
            alert(depositar(cliente, montoDeposito));
            break;
          case '3':
            const destinoNumero = prompt('Ingrese el número de cuenta de destino:');
            const destino = cuentas.find((cuenta) => cuenta.numero === destinoNumero);
            if (destino) {
              const montoTransferencia = parseFloat(prompt('Ingrese el monto a transferir:'));
              alert(transferir(cliente, destino, montoTransferencia));
            } else {
              alert('Cuenta de destino no encontrada.');
            }
            break;
          case '4':
            alert(consultarSaldo(cliente));
            break;
          case '5':
            alert('Gracias por utilizar nuestro cajero automático.');
            return;
          default:
            alert('Opción no válida. Por favor, elija una opción válida.');
        }
      }
    } else {
      alert('Número de cuenta o PIN incorrectos. Acceso denegado.');
    }
  }
  
  cajeroAutomatico();