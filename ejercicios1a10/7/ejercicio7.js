/**
 * @author Ruben Perblac
 * @description Elimina la primera aparición de un elemento en un array
 */

/**
 * 
 * @param array arr 
 * @param object elemento 
 */
const eliminarElemento = (arr, elemento)  => {
    if (!Array.isArray(arr))
        throw new Error(`El primer argumento no es un array (${arr})`);
    const indice = arr.indexOf(elemento);
    if (indice < 0)
        console.log(`El elemento ${elemento} no está en el array`);
    else
        arr.splice(indice,1);
};

/* // No destructivo:
const eliminarElemento = (arr, elemento)  => {
    if (!Array.isArray(arr))
        throw new Error(`El primer argumento no es un array (${arr})`);
    const indice = arr.indexOf(elemento);
    let resultado = new Array(...arr);
    if (indice < 0)
        console.log(`El elemento ${elemento} no está en el array`);
    else
        resultado.splice(indice,1);
    return resultado;
};
*/