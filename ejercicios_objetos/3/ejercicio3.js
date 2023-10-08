/**
 * @author Ruben Perblac
 * @description Una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
 *  el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,
 *  no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

/**
 * 
 * @param {object} a 
 * @param {string} b 
 * @returns boolean
 */
function tieneTrue(a, b) {
  return b in a && a[b] == true;
}
