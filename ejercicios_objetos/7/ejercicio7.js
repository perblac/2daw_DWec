/**
 * @author Ruben Perblac
 * @description Una función que toma un objeto (a) como argumento. Devuelve una matriz con todas
 *  las claves de los objetos.
 */

function devuelveClaves(a) {
  const result = [];
  for (let clave in a) {
    result.push(clave);
  }
  return result;
}