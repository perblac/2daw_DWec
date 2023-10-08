/**
 * @author Ruben Perblac
 * @description Una función que toma un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
 *  el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.
 */

/**
 * 
 * @param {object} a 
 * @param {string} b 
 * @returns boolean
 */
function tieneClave(a, b) {
  return b in a;
}
