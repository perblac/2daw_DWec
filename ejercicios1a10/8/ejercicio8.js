/**
 * @author Ruben Perblac
 * @description Devuelve los valores máximo y mínimo de un array
 */

/**
 * 
 * @param array arr 
 * @returns object
 */
const encontrarMaxMin = (arr) => {
    if (!Array.isArray(arr))
        throw new Error(`El argumento no es un array (${arr})`);
    let maximo = arr[0], minimo = arr[0];
    for (let elemento of arr) {
        maximo = (elemento>maximo)?elemento:maximo;
        minimo = (elemento<minimo)?elemento:minimo;
    }
    return {'max': maximo, 'min': minimo};
};