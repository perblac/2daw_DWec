/**
 * @author Ruben Perblac
 * @description Ordena un array de numeros de menor a mayor
 */

/**
 * 
 * @param num[] arr 
 * @returns array
 */
const ordenarNumeros = arr => {
    if (!Array.isArray(arr))
        throw new Error(`El argumento no es un array (${arr})`);
    const arrayOrdenado = new Array(...arr);
    return arrayOrdenado.sort((num1, num2) => num1 - num2);
};