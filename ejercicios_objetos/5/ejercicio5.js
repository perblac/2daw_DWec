/**
 * @author Ruben Perblac
 * @description Una función que toma dos cadenas (a y b) como argumentos. Crea un objeto que tiene una
 *  propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns object
 */
function creaPar(a, b) {
  return { [a]: b }
}
