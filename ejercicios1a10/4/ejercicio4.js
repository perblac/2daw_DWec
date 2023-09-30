/**
 * @author Ruben Perblac
 * @description Une varios arrays
 */

/**
 * 
 * @param  array[] arr 
 * @returns array
 */
const unirArrays = (...arr) => [].concat(...arr);

/* // Iterando los argumentos:
function unirArrays(...arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            resultado = resultado.concat(arr[i]);
    }
    return resultado;
}
*/

/* // Con reduce:
const unirArrays = (...arr) => {
    return arr.reduce((resultado,array) => resultado.concat(array), []);
}

// En una linea:
const unirArrays = (...arrs) => arrs.reduce((resultado,array) => resultado.concat(array), []);
*/
