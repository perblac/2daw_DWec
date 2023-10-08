/**
 * @author Ruben Perblac
 * @description Toma una matriz de números como argumento. Convierte la matriz en un objeto que tendrá una
 *  clave para cada valor único de la matriz, y como valor el número de veces que aparece la clave dentro
 *  de la matriz.
 * 
 */

/**
 * 
 * @param {array} array 
 * @returns object
 */
const cuentaNumeros = (array) => Object.fromEntries(
    [ ...new Set(array) ]
        .map(valor => [
                valor,
                array.filter(numero => numero == valor).length
                ]
            )
    );

/*
function cuentaNumeros(array) {
    const result = {};
    const valoresUnicos = new Set(array);
    [...valoresUnicos].map(valor => Object.assign(result, {[valor]: array.filter(numero => numero == valor).length}));
    return result;
}
*/