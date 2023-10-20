// usando class:
export class ComidaClass {
    _nombre;
    _calorias;
    constructor(nombre,calorias){
        this._nombre = nombre;
        this._calorias = calorias;
    }
    get nombre() {
        return this._nombre;
    }
    calcularCalorias() {
        return this._calorias;
    }
}
export class DietaClass {
    _alimentosConsumidos;
    constructor() {
        this._alimentosConsumidos = [];
    }
    agregarAlimento(alimento) {
        if (alimento instanceof ComidaClass) {
            this._alimentosConsumidos.push(alimento);
        } else throw new Error("No comas cosas raras");
    }
    calcularTotalCalorias() {
        return this._alimentosConsumidos.reduce((acum,alim) => acum + alim.calcularCalorias(), 0);
    }
    listarAlimentosConsumidos() {
        return this._alimentosConsumidos.map((alim)=>`Alimento: ${alim.nombre} - Calorias: ${alim.calcularCalorias()}\n`).join('');
    }
}

// usando función constructora:
export function ComidaFunction(nombre = '', calorias = 0) {
    this._nombre = nombre;
    this._calorias = calorias;
    Object.defineProperty(this,'nombre', {
        get: function() {
            return this._nombre;
        }        
    })
    this.calcularCalorias = function() {
        return this._calorias;
    }
    return this;
}

export function DietaFunction() {
    this._alimentosConsumidos = [];
    this.agregarAlimento = function(alimento) {
        if (alimento instanceof ComidaFunction) {
            this._alimentosConsumidos.push(alimento);
        } else throw new Error("No comas cosas raras");
    };
    this.calcularTotalCalorias = function() {
        return this._alimentosConsumidos.reduce((acum,alim) => acum + alim.calcularCalorias(), 0);
    };
    this.listarAlimentosConsumidos= function() {
        return this._alimentosConsumidos.map((alim)=>`Alimento: ${alim.nombre} - Calorias: ${alim.calcularCalorias()}\n`).join('');
    }
    return this;
}

// usando objeto literal:
export const ComidaLiteral = {
    _nombre: "",
    _calorias: 0,
    get nombre() {
        return this._nombre;
    },
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    },
    calcularCalorias() {
        return this._calorias;
    },
    set calorias(nuevoCalorias) {
        this._calorias = nuevoCalorias;
    }
}
export const DietaLiteral = {
    _alimentosConsumidos: [],
    agregarAlimento(alimento) {
        if (ComidaLiteral.isPrototypeOf(alimento)) {
            this._alimentosConsumidos.push(alimento);
        } else throw new Error("No comas cosas raras");
    },
    calcularTotalCalorias() {
        return this._alimentosConsumidos.reduce((acum,alim) => acum + alim.calcularCalorias(), 0);
    },
    listarAlimentosConsumidos() {
        return this._alimentosConsumidos.map((alim)=>`Alimento: ${alim.nombre} - Calorias: ${alim.calcularCalorias()}\n`).join('');
    },
}