/**
 * @author Ruben Perblac
 * @description Intercambia claves y valores de objetos. Toma un objeto como argumento e intercambia la 
 * clave del objeto Javascript con sus valores y devuelve el objeto resultante.
 */

/**
 * 
 * @param {object} objeto 
 * @returns object
 */
function intercambia(objeto) {
    const result = {};
    for (let clave in objeto) {
        result[objeto[clave]] = clave;
    }
    return result;
}