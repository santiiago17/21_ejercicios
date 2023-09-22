

class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.descuento = descuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalAPagar(cantidadUnidadesCompra) {
      return cantidadUnidadesCompra * this.precioCompra * (1 - this.descuento / 100);
    }
  }
  
  class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento);
      this.talla = talla;
    }
  }
  
  const prendasDeVestir = [];
  const prenda1 = new PrendaVestir('P001', 'Camisa', 25, 50, 10, 5, 50, 10, 'M', true);
  const prenda2 = new PrendaVestir('P002', 'Blusa', 20, 40, 15, 8, 60, 5, 'S', false);
  prendasDeVestir.push(prenda1, prenda2);
  
  
  const calzado = [];
  const zapato1 = new Calzado('C001', 'Tenis', 30, 60, 8, 4, 40, 15, '38');
  const zapato2 = new Calzado('C002', 'Sandalias', 15, 35, 12, 6, 45, 5, '36');
  calzado.push(zapato1, zapato2);
  
  
  const numPrendasDeVestir = prendasDeVestir.length;
  const numCalzado = calzado.length;
  
  console.log('Número de productos de prendas de vestir:', numPrendasDeVestir);
  console.log('Número de productos de calzado:', numCalzado);
  