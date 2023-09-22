const tiposClientes = {
    PREFERENCIAL: 'preferencial',
    GENERAL: 'general',
    SIN_CUENTA: 'sin_cuenta'
  };
  
  const tiposAtencion = {
    CAJA: 'caja',
    ASESORIA: 'asesoria'
  };
  
  
  const tiposCaja = {
    DEPOSITO: 'deposito',
    RETIRO: 'retiro'
  };
  class Banco {
    constructor() {
      this.cajas = [null, null, null, null, tiposAtencion.ASESORIA];
      this.clientes = {
        [tiposClientes.PREFERENCIAL]: [],
        [tiposClientes.GENERAL]: [],
        [tiposClientes.SIN_CUENTA]: []
      };
      this.atendiendo = null;
    }
  
    agregarCliente(tipoCliente) {
      this.clientes[tipoCliente].push({});
      this.atenderClientes();
    }
  
    atenderClientes() {
      if (this.atendiendo !== null) return;
  
      const tiposPrioritarios = [tiposClientes.PREFERENCIAL, tiposClientes.GENERAL, tiposClientes.SIN_CUENTA];
  
      for (const tipoCliente of tiposPrioritarios) {
        const cliente = this.clientes[tipoCliente].shift();
        if (cliente) {
          this.atenderCliente(cliente, tipoCliente);
          break;
        }
      }
    }
  
    atenderCliente(cliente, tipoCliente) {
      if (this.cajas.includes(null)) {
        const cajaIndex = this.cajas.findIndex(caja => caja === null);
        this.cajas[cajaIndex] = tipoCliente === tiposClientes.PREFERENCIAL ? tiposAtencion.ASESORIA : tiposAtencion.CAJA;
        this.atendiendo = { cliente, cajaIndex };
        this.atenderCaja(cajaIndex, tipoCliente);
      }
    }
  
    atenderCaja(cajaIndex, tipoCliente) {
      const tipoAtencion = this.cajas[cajaIndex];
  
      if (tipoAtencion === tiposAtencion.CAJA) {
        let tipoCaja;
        if (cajaIndex <= 1) {
          tipoCaja = tiposCaja.RETIRO;
        } else {
          tipoCaja = Math.random() < 0.5 ? tiposCaja.DEPOSITO : tiposCaja.RETIRO;
        }
        console.log(`Atendiendo cliente ${tipoCliente} en caja ${cajaIndex + 1} (${tipoCaja})`);
      } else if (tipoAtencion === tiposAtencion.ASESORIA) {
        console.log(`Atendiendo cliente ${tipoCliente} en asesoría`);
      }
  
      setTimeout(() => {
        this.cajas[cajaIndex] = null;
        this.atendiendo = null;
        this.atenderClientes();
      }, Math.floor(Math.random() * 5000) + 1000); 
    }
  }
  
  const miBanco = new Banco();
miBanco.agregarCliente(tiposClientes.PREFERENCIAL);
