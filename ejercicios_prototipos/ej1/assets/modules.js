// usando class:
// para crear -> const object = new LibroClass()
export class LibroClass {
    // #titulo;
    // #autor;
    // #precio;
    _titulo;
    _autor;
    _precio;

    constructor(titulo,autor,precio) {
        this._titulo = titulo;
        this._autor = autor;
        this._precio = precio;
    }
    
    get titulo() {
        return this._titulo;
    }
    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    get autor() {
        return this._autor;
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    get precio() {
        return this._precio;
    }
    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
}

// usando función constructora:
// para crear -> const object = new LibroFunction(titulo,autor,precio)
export function LibroFunction(titulo,autor,precio) {
    this._titulo = titulo;
    this._autor = autor;
    this._precio = precio;
    Object.defineProperty(this,'titulo',{
        get: function() {
            return this._titulo;
        },
        set: function(nuevoTitulo) {
            this._titulo = nuevoTitulo;
        },
    });
    Object.defineProperty(this,'autor', {
        get: function() {
            return this._autor;
        },
        set: function(nuevoAutor) {
            this._autor = nuevoAutor;
        }
    });
    Object.defineProperty(this,'precio',{
        get: function() {
            return this._precio;
        },
        set: function(nuevoPrecio) {
            this._precio = nuevoPrecio;
        }
    });
    return this;
}

// usando objeto literal:
// para crear -> let object = Object.create(LibroLiteral)
export const LibroLiteral = {
    _titulo: '',
    _autor: '',
    _precio: '',
    get titulo() {
        return this._titulo;
    },
    set titulo(nuevoTitulo) {
        this._titulo 
    },
    get autor() {
        return this._autor;
    },
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    },
    get precio() {
        return this._precio;
    },
    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    },
}