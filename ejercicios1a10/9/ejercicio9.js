/**
 * @author Ruben Perblac
 * @description Busca un elemento en un array y devuelve su indice
 */

/**
 * 
 * @param array arr 
 * @param object elemento 
 * @returns number
 */
let buscarElemento = (arr,elemento) => arr.indexOf(elemento);

/* // Con comprobación de que se le pasa un array:
function buscarElemento(arr,elemento) {
    if (!Array.isArray(arr))
        throw new Error(`El primer argumento no es un array (${arr})`);
    let indice = arr.indexOf(elemento);
    return indice;
}
*/