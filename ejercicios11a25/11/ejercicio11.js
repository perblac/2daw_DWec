/**
 * @user Ruben Perblac
 * @description Aplica una funcion a cada elemento de un array y devuelve un nuevo array con los resultados
 * 
 */

/**
 * 
 * @param array arr 
 * @param function funcion 
 * @returns array
 */
const mapearNumeros = (arr, funcion) => {
    const resultado=[];
    for (let elemento of arr) {
        resultado.push(funcion(elemento));
    }
    return resultado;
};