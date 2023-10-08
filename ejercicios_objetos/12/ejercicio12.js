/**
 * @author Ruben Perblac
 * @description Una función que toma un objeto (a) y un número (b) como argumentos. Multiplica todos los
 *  valores de 'a' por 'b'. Devuelve el objeto resultante. Comprueba que los valores de las claves de (a)
 *  son números para realizar la multiplicación.
 */

/**
 *
 * @param {object} a
 * @param {number} b
 * @returns object
 */
const multiplicaPorNumero = (a, b) =>
  Object.fromEntries(
    Object.entries(a).map((num) =>
      typeof num[1] == "number" ? [num[0], num[1] * b] : [num[0], num[1]]
    )
  );

/*
function multiplicaPorNumero(a,b) {
    for (let clave in a) {
        if (typeof a[clave] == 'number') {
            a[clave] *= b;
        }
    }
    return a;
}
*/
