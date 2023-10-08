/**
 * @author Ruben Perblac
 * @description Toma un objeto (a) como argumento. Devuelve la suma de todos los valores (temperaturas) del
 *  objeto. Validar que los valores de las claves son números para realizar la suma.
 */

/**
 * 
 * @param {object} a 
 * @returns number
 */
function sumaTemperaturas(a) {
  let suma = 0;
  for (let temperatura of Object.values(a)) {
    if (typeof temperatura == "number") suma += temperatura;
  }
  return suma;
}
