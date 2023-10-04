/**
 * @author Ruben Perblac
 * @description Una función que toma dos cadenas (a y b) como argumentos. Crea un objeto que tiene una
 *  propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

function creaPar(a, b) {
  let result = {};
  result[a] = b;
  return result;
}
