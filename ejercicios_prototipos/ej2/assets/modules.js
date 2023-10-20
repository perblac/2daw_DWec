// usando class:
export class Comida {
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
export class Dieta {
    _alimentosConsumidos;
    constructor() {
        this._alimentosConsumidos = [];
    }
    agregarAlimento(alimento) {
        if (alimento instanceof Comida) {
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

// usando objeto literal: