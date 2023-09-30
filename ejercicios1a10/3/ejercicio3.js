/**
 * @author Ruben Perblac
 * @description Filtrar numeros pares de un array
 */

/**
 * 
 * @param num[] arr 
 * @returns num[]
 */
const filtrarPares = arr => arr.filter(num => num % 2 === 0);

/* Comprobando que se le pasa un array:
function filtrarPares(arr) {
    if (!Array.isArray(arr))
        throw new Error(`El argumento no es un array (${arr})`);
    return arr.filter(num => num % 2 === 0);
}
*/