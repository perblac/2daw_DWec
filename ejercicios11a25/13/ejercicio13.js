/**
 * @author Ruben Perblac
 * @description Extrae de un objeto las propiedades que se le pasen por un array y las devuelve en un nuevo objeto
 * 
 */

/**
 * Función que devuelve un nuevo objeto con las propiedades presentes en obj
 * 
 * @param {Object} obj 
 * @param {Array} propiedades 
 * @returns {Object}
 */
const extraerPropiedades = (obj, propiedades) => {
    const resultado = {};
    for (let propiedad of propiedades) {
        if (propiedad in obj) resultado[propiedad] = obj[propiedad];
    }
    return resultado;
}

/* con reduce()
const extraerPropiedades = (obj, propiedades) => {
    return propiedades.reduce((acum, propiedad) => {
    (propiedad in obj)?acum[propiedad] = obj[propiedad]:'';
    return acum;
}, {});
}
*/