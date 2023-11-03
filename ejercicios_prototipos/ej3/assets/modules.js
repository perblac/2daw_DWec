// usando class:
export class VehiculoClass {
  static MAXVEL = 30;
  _marca;
  _modelo;
  _año;
  _velocidad;
  constructor(marca, modelo, año) {
    this._marca = marca;
    this._modelo = modelo;
    this._año = año;
    this._velocidad = 0;
  }
  acelerar() {
    if (this.velocidad > 0)
      this._velocidad += this.velocidad < VehiculoClass.MAXVEL ? 1 : 0;
  }

  get marca() {
    return this._marca;
  }
  get modelo() {
    return this._modelo;
  }
  get año() {
    return this._año;
  }
  get velocidad() {
    return this._velocidad;
  }
  set velocidad(vel) {
    this._velocidad =
      vel <= VehiculoClass.MAXVEL ? (vel >= 0 ? vel : 0) : VehiculoClass.MAXVEL;
  }
}

export class CocheClass extends VehiculoClass {
  constructor(marca, modelo, año) {
    super(marca, modelo, año);
  }
  arrancar() {
    this.velocidad = 1;
  }
  frenar() {
    this.velocidad = 0;
  }
}

export class MotoClass extends VehiculoClass {
  constructor(marca, modelo, año) {
    super(marca, modelo, año);
  }
  arrancar() {
    this.velocidad = 1;
  }
  frenar() {
    this.velocidad = 0;
  }
}

// usando función constructora:
export function VehiculoFunction(marca, modelo, año) {
  this._marca = marca;
  this._modelo = modelo;
  this._año = año;
  this._velocidad = 0;

  this.acelerar = function () {
    if (this.velocidad > 0)
      this._velocidad += this.velocidad < VehiculoFunction.MAXVEL ? 1 : 0;
  };

  Object.defineProperty(this, "marca", {
    get: function () {
      return this._marca;
    },
  });
  Object.defineProperty(this, "modelo", {
    get: function () {
      return this._modelo;
    },
  });
  Object.defineProperty(this, "año", {
    get: function () {
      return this._año;
    },
  });
  Object.defineProperty(this, "velocidad", {
    get: function () {
      return this._velocidad;
    },
    set: function (vel) {
      this._velocidad =
        vel <= VehiculoFunction.MAXVEL
          ? vel >= 0
            ? vel
            : 0
          : VehiculoFunction.MAXVEL;
    },
  });
}

Object.defineProperty(VehiculoFunction, "MAXVEL", {
  get: function () {
    const _MAXVEL = 30;
    return _MAXVEL;
  },
});

export function CocheFunction(marca, modelo, año) {
  // this.__proto__ = new VehiculoFunction(marca, modelo, año);
  VehiculoFunction.call(this, marca, modelo, año);

  this.arrancar = function () {
    this.velocidad = 1;
  };
  this.frenar = function () {
    this.velocidad = 0;
  };
}
Object.setPrototypeOf(CocheFunction.prototype, VehiculoFunction.prototype);
// CocheFunction.prototype = Object.create(VehiculoFunction.prototype, {
//   constructor: {
//     value: CocheFunction,
//     enumerable: false,
//     writeble: true,
//     configurable: true,
//   }
// });

export function MotoFunction(marca, modelo, año) {
  // this.__proto__ = new VehiculoFunction(marca, modelo, año);
  VehiculoFunction.call(this, marca, modelo, año);

  this.arrancar = function () {
    this.velocidad = 1;
  };
  this.frenar = function () {
    this.velocidad = 0;
  };
}
Object.setPrototypeOf(MotoFunction.prototype, VehiculoFunction.prototype);
// MotoFunction.prototype = Object.create(VehiculoFunction.prototype, {
//   constructor: {
//     value: MotoFunction,
//     enumerable: false,
//     writeble: true,
//     configurable: true,
//   }
// });

// usando objeto literal:
export const VehiculoLiteral = {
  _marca: "",
  _modelo: "",
  _año: 0,
  _velocidad: 0,
  acelerar: function () {
    if (this.velocidad > 0)
      this._velocidad += this.velocidad < VehiculoLiteral.MAXVEL ? 1 : 0;
  },
  get marca() {
    return this._marca;
  },
  set marca(marca) {
    this._marca = marca;
  },
  get modelo() {
    return this._modelo;
  },
  set modelo(modelo) {
    this._modelo = modelo;
  },
  get año() {
    return this._año;
  },
  set año(año) {
    this._año = año;
  },
  get velocidad() {
    return this._velocidad;
  },
  set velocidad(velocidad) {
    this._velocidad =
      velocidad <= VehiculoLiteral.MAXVEL
        ? velocidad >= 0
          ? velocidad
          : 0
        : VehiculoLiteral.MAXVEL;
  },
};

Object.defineProperty(VehiculoLiteral, "MAXVEL", {
  get: function () {
    const _MAXVEL = 30;
    return _MAXVEL;
  },
});

export const CocheLiteral = {
  // __proto__: VehiculoLiteral,
  arrancar: function () {
    this.velocidad = 1;
  },
  frenar: function () {
    this.velocidad = 0;
  },
};

Object.setPrototypeOf(CocheLiteral, VehiculoLiteral);

export const MotoLiteral = {
  // __proto__: VehiculoLiteral,
  arrancar: function () {
    this.velocidad = 1;
  },
  frenar: function () {
    this.velocidad = 0;
  },
};

Object.setPrototypeOf(MotoLiteral, VehiculoLiteral);
