// con Clases(class)
export class Calculadora {
  sumar(a, b) {
    return a + b;
  }
  restar(a, b) {
    return a - b;
  }
  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    return a / b;
  }
  elevar(a, b) {
    return a ** b;
  }
  raizCuadrada(a) {
    return Math.sqrt(a);
  }
}

// con Funciones constructoras
export function Calculadora() {
  this.sumar = function (a,b) {
    return a + b;
  }
  this.restar = function (a,b) {
    return a - b;
  }
  this.multiplicar = function (a,b) {
    return a * b;
  }
  this.dividir = function (a,b) {
    return a / b;
  }
  this.elevar = function (a,b) {
    return a ** b;
  }
  this.raizCuadrada = function (a) {
    return Math.sqrt(a);
  }  
}

// con Objetos Literales
const Calculadora = {
  sumar: function(a,b) {
    return a + b;
  },
  restar: function(a,b) {
    return a - b;
  },
  multiplicar: function(a,b) {
    return a * b;
  },
  dividir: function(a,b) {
    return a / b;
  },
  elevar: function(a,b) {
    return a ** b;
  },
  raizCuadrada: function(a) {
    return Math.sqrt(a);
  },  
}