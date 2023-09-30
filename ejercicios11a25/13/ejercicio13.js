/**
 * @author Ruben Perblac
 * @description Extrae de un objeto las propiedades que se le pasen por un array y las devuelve en un nuevo objeto
 * 
 */

/**
 * 
 * @param object obj 
 * @param array propiedades 
 * @returns object
 */
const extraerPropiedades = (obj, propiedades) => {
    const resultado = {};
    for (let propiedad of propiedades) {
        if (propiedad in obj) resultado[propiedad] = obj[propiedad];
    }
    return resultado;
}