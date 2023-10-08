/**
 * @author Ruben Perblac
 * @description Toma un objeto como argumento. Reemplaza cadenas vacías y cadenas que contienen solo espacios
 *  en blanco con valores nulos. Devuelve el objeto resultante.
 */

/**
 * 
 * @param {object} objeto 
 * @returns object
 */
function empty2null(objeto) {
    const result = [];
    Object.assign(result,objeto);
    for (let [cadena, index] of result) {
        result[index] = (cadena.trim()==='')?null:cadena;
    }
    return result;
}